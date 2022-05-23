//Nested functions
function outer() {
    let counter = 0;
    function inner() {
        counter++;
        console.log(counter);
    }
    return inner()
}
const fn = outer();
fn()
fn()


//Closure
function add(a, b) {
    return console.log(a + b)
}
const fn2 = add(1, 2);
console.log(fn2)

const animal = {
    name: "Lion"
}

const zoo = {
    name: "Abuja",
    sayMyname: function () {
        console.log(`My name is ${this.name}`)
    }
}

//this keyword
function Person(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
}

const p1 = new Person('Udom', "Emma")
console.log(p1)

function sayMyname() {
    console.log(`My name is ${this.name}`)
}

sayMyname()