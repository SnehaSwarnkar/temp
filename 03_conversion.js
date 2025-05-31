let score = "123abc";

//console.log(typeof score);          // string
//console.log(typeof(score));         // also string

let valueInNumber = Number(score);
//console.log(valueInNumber);         // NaN, because "123abc" can't be fully converted to number
//console.log(typeof valueInNumber); // number

// Examples of type conversion:
//console.log(Number("22"));         // 22
//console.log(Number("22abd"));      // NaN
//console.log(Number(true));         // 1
//console.log(Number(false));        // 0

// Boolean conversion example
let isLoggedIn = "senha"; // fixed variable name from isLoggeddIn to isLoggedIn
let booleanIsLoggedIn = Boolean(isLoggedIn);
//console.log(booleanIsLoggedIn);    // true, because non-empty strings are truthy

let someNumber = 123;
let stringNumber = String(someNumber); // Use capital 'N' to match the log statement
//console.log(stringNumber);            // Output: "123"
//console.log(typeof stringNumber);     // Output: "string"

// ******Operations******

let value = 3
let negValue = -value 
console.log(negValue); //Output = -3

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)    
// console.log(2**2) -- it is in power of 2
// console.log(2/2)    it is remainder 
// console.log(2%2)   
let str1 = "heloo"
let str2 = "Sneha"
let str3 = str1 + str2
console.log(str3);

let gamecounter = 100
++gamecounter;
console.log(gamecounter);
