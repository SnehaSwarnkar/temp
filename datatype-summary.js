//Primitive 
// 7 types : 
// String
//  number
//  Boolean 
// undefined
// symbol 
// Bigint

// Refernce(Non Primitive)
// arrays 
// objects 
// functions 

const score = 100 
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null // no value assigned 
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); // false, symbols are unique

const bigNumber = 1234567876543456n
const heros = ["Thor", "Ironman","hulk"]
let myObj = {
    name:"sneha",
    age:20,
}
const myFunction = function() {
    console.log("hello World"); // function declartion 
    
}
console.log(typeof myFunction); // number 

