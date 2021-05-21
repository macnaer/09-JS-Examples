let btnSave = document.getElementById("btnSave");
btnSave.addEventListener('click', GetPerson);
let name = document.getElementById("Name");
let surname = document.getElementById("Surname");
let age = document.getElementById("Age");

let Persons = [];

function GetPerson(event) {
    event.preventDefault();
    // console.log(`Name: ${name.value}\nSurname: ${surname.value}\nAge: ${age.value}`)
    let Person = {
        name: name.value,
        surname: surname.value,
        age: age.value,
        Print() {
            console.log(`${this.name}\n${this.surname}\n${this.age}`)
        }
    }
    Persons.push(Person);

    name.value = ""
    surname.value = ""
    age.value = ""

    // Persons.forEach(person => {
    //     person.Print();
    // })
    console.log(Persons.length)
    Render();

}

const Render = () => {
    let root = document.getElementById("root");
    let div = document.createElement("div");
    div.setAttribute("class", "test, test2");
    div.innerHTML = Persons[0].name;
    root.appendChild(div);
}


