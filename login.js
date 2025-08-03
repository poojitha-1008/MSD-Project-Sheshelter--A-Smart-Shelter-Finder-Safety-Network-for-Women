let form=document.querySelector("form");
let username=document.querySelector("#user");
let password=document.querySelector("#pass");
form.addEventListener("submit",function(event){
    event.preventDefault();
    alert(`welcome ${username.value},your password is set as ${password.value}`)

})