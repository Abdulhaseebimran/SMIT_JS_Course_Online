let data = "Hello ";
let data2 = "Students";

let data3 = data + data2; // String Concatenation
console.log(data3);

// num + num = addition
// num + string = Concatenation
// string + num = Concatenation
// string + string = Concatenation

let num = "5";
let num2 = 5;

// console.log(+num + num2);
console.log(parseInt(num) + num2);

// let num3 = num + num2; // Addition
// console.log(num3);

let a = "Abdul";
let b = a.includes("A");
console.log(b);


// Math Operators = + - * / %


let num4 = 10;
let num5 = 5;
console.log(num4 % num5);

let userFavNum = prompt("What is your favourite number?");
console.log("Your favourite number is " + userFavNum);

let randomNumber = Math.random();
randomNumber = randomNumber * 10; 
// randomNumber *= 10; // Short Hand
let roundedNumber = Math.round(randomNumber);
console.log(roundedNumber);