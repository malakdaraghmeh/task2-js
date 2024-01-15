var registerForm = document.querySelector(".registerForm");
registerForm.onsubmit = function(e){
e.preventDefault();
var elements = e.target.elements;
var users = {
    name:elements[0].value,
    email:elements[1].value,
    password:elements[2].value,
}
console.log(users);
}