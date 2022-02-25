var password = document.getElementById("password");
var confirm_password = document.getElementById("confirm_password");
var confLabel = document.getElementById("confirm_password_label")

function validatePassword(){
  
}
confirm_password.addEventListener('keyup', e=>{
    if(password.value != confirm_password.value) {
        confLabel.innerText = "Passwords Don't Match";
        confLabel.style.color = "red";
      } else {
        confLabel.innerText = "Password Matches √";
        confLabel.style.color = "green";
      }
}

)
