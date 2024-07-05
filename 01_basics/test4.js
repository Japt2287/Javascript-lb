// Data Types 

// Primitive Data Types

//  String, Number, Boolean, null, undefined, NaN, Symbol, BigInt, 

const score = 3;
const scoreVAlue = 2.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail; // undefined(default)

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId)

const bigNumber = 12374672837368n;



// Non-Primitve Data Types
//  Array, Objects, Functions

const heros = ["shaktiman", "Ironman", "doga"];

let myObj = {
    name: "Japtavya",
    age: 21,
}

const myFunction = function myFunc(){
        console.log("Hello World");
}

// console.log(typeof(myObj)); // output: Object

//  ***************************

//Stack(Primitive), Heap(Non - Primitive)

let myName = "Japtavya Singh"

let anotherName = myName
// console.log(anotherName);


let user ={
    email: "jap@gmail.com",
    upi: "hello@paytm"
}

let newUser =(user)

newUser.email = "hey@gmail.com"
console.log(newUser);
console.log(user)

