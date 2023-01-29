
if(localStorage.getItem("logado") == null){
        window.location = "../Login/login.html"
}
let task = "";
let completed = document.createElement('div');

let btnTask = document.getElementById("btnTask");
btnTask.addEventListener("click", (e)=>{
    e.preventDefault();

    let taskAdded = document.getElementById("taskAdded");
    let newTask = document.getElementById("newTask");
    newTask = taskAdded.value;

    if(newTask.length == 0){
       alert("Add a valid task")
       cleanSection.innerHTML += "";
    }
    else{
    const btnMade = document.createElement('button');
    btnMade.innerHTML = "Made";
    btnMade.classList = 'btnMade' 

    boxTasks = `<a>${newTask}</a>
                <br>`;

    const divTask = document.createElement('div'); 
    divTask.innerHTML += boxTasks;
    divTask.appendChild(btnMade);
    divTask.innerHTML += "  ";
    divTask.innerHTML += `<br>`
    cleanSection.appendChild(divTask);
    divTask.classList = `${newTask}`


    divTask.addEventListener('click', (e)=>{
        const userAction = e.target

        switch(userAction.classList[0]){
            case(`${newTask}`):{ 
           userAction.innerHTML = ""
        }
           case('btnMade'):{
             divTask.style.color = "#00FF00"
            completed.innerHTML += `${newTask} <br>`;
            completed.style.color = "00FF00"
        }}
    })

    let filter = document.querySelector(".select")
    filter.addEventListener("change", (e)=>{
        
        let check = document.getElementById("check")

       if(filter.value == "all"){
        cleanSection.appendChild(divTask);
        cleanSection.removeChild(completed);
        check.innerHTML = "";
       }
       else if(filter.value == "completed" ){
        cleanSection.innerHTML = "";
        check.innerHTML = `CHECK:`
        check.style.color = "#FFF"
        cleanSection.appendChild(completed);
       }

    })

    }    
})

btnLogout = document.getElementById("btnlogout");
btnLogout.addEventListener("click", ()=>{
    localStorage.removeItem("logado");
    window.location = "../Login/login.html"
    
})

