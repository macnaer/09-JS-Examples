let btnSave = document.getElementById("btnSave");
btnSave.addEventListener('click', GetPerson);
let name = document.getElementById("Name");
let surname = document.getElementById("Surname");
let age = document.getElementById("Age");

function GetPerson(event) {
    event.preventDefault();
    console.log(`Name: ${name}\nSurname: ${surname}\nAge: ${age}`)
}