alert("Hello World");

//  variable , let , var , const means your value is constant 

// Variable Rules
// 1. Legal or Illegal names

// Legal
// let lastName // CamelCase
// lastname

// Allowed Special Characters
// _ $
// let $nameWith$Dollar = "";
// let _nameWith_Dollar = "";

// Var cannot be start with a number
// let myName

// Illegal
// let last name // spaces
// let my#name
// reserved words

// alert(firstName);


let learn = "I am Learning javascript";
alert(learn);

// camelCase 

let myName = "Abdul haseeb";
console.log(myName);

// Allowed special character 

// for e.g : _ , $

let $lastName = "Imran";
let _lastName = "";
let $last$Name = "";
console.log($lastName);

console.log("SMIT JS CRASH COURSE Online");

// Data types 
// -----------

// String
// Number
// Boolean

let num = 8;
console.log("The type of number is " + num  + typeof(num));
let numToString = toString(num);

console.log(typeof(numToString));

// String 
let firstName = 'ABDUL'; 
// examples = "Farrukh", "An Apple", "#", "8" "email@test.com"
// Any letter, word or sentence is String in JavaScript

// 2. Number
let myLuckyNumber = 8;
// example = 4, 37, 0, -34, 4.765

// 3. Boolean
let isTodayMonday = true;
// emaple = true & false