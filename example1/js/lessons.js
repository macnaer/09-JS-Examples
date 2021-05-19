function Sum(...params) {
    console.log(params)
    let result = 0;

    params.forEach(item => {
        result += item;
    })

    return result;
}

// console.log(Sum(4, 11, 4, 34, 543, 545, 5, 3, 43, 5, 345, 345))

const Car = {
    Vendor: "Audi",
    Model: "A6",
    Price: 10000
}

// let Vendor = Car.Vendor;
// let Model = Car.Model;
// let Price = Car.Price;

// let { Vendor, Model, Price } = Car;

// console.log(`Vendor: ${Vendor}\nModel: ${Model}$\nPrice: ${Price}`)


// Expression
const Minus = function (a, b) {
    console.log(a - b)
}
// Minus(3, 8);

// Plus(3, 11)

// Declaration
function Plus(a, b) {
    console.log(a + b);
}

// Arrow
const Multiply = (a, b) => {
    console.log(a * b);
}

const Err = () => console.log("Arrow finctions Err works");

// Err();

// Multiply(3, 3);

// Annonymous
// (function (a, b) {
//     console.log("Annonymous: ", (a / b));
// }(10, 2))

function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.Print = function () {
        console.log(`Name: ${this.firstName}\nSurname: ${this.lastName}\nAge: ${this.age}`)
    }
}

const Bill = new Person("Bill", "Simpson", 56);
Bill.Print();

const Bob = new Person("Bob", "Simpson", 34);
Bob.Print();