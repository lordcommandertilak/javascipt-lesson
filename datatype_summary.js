// Primitive data type 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100 // int
const scoreVaule = 100.23 // float

const isLoggedIn = false // boolean
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // false

const bigNum = 123123123131253453453454n //bigint
 console.log(typeof(bigNum));
 

// -------------XXXXXXXXXX--------------------

// ***** Reference Type (Non-Primitive)***
// Array, Objects, Function

const heros = ["Spiderman", "Ironman", "CaptainAmerica"]

let myObj = {
    name: "Peter parker",
    alius: "Spiderman",
    age: 21, 
}

const myFunct = function () {
    console.log(heros);
    
}
myFunct();
