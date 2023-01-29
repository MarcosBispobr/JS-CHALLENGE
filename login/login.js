let form = document.getElementById("form");
let email = document.getElementById("email");
let password = document.getElementById("password");


let user = {emailCorrect : "fullture@gmail.com", 
            passwordCorrect : "fullture"};

form.addEventListener("submit", (e)=>{
    e.preventDefault();

  if(email.value == user.emailCorrect && password.value == user.passwordCorrect){
    localStorage.setItem("logado", true)
    window.location = "../interPage/interPage.html"
  }
 
})




