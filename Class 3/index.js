let userFavNum = prompt("Enter you favourite number");

console.log(+userFavNum + 5);

// Comparison Operators
// ==, ===
// == : check value not type
// === : check value and type 

console.log(5 === "5");

// !=, !==
// != : check value not types
// !== : check value and types
console.log(5 !== 5);

// operators
// <, >, <=, >=

let user1Age = 7;
let user2Age = 25;
console.log(user2Age >= 18);

let userAge = +prompt("Enter your age");

if (userAge >= 18) {
    console.log("You can apply for NIC");
} else {
    console.log("You are not eligible")
}

// guess game

// let userFavNum = +prompt("Enter a number");
// let computerNum = Math.round(Math.random() * 10);

// if (userFavNum === computerNum) {
//     console.log("You Won!");
// } else {
//     console.log("You Lose! " + computerNum);
// }

// Even odd

let userInput = prompt("Enter a number ");
let computerNum2 = Math.round(Math.random() * 10);

if (computerNum2 % 2 === 0 && userInput === "even") {
    console.log("You Won! " + computerNum2);
} else if (computerNum2 % 2 !== 0 && userInput === "odd") {
    console.log("You Won! " + computerNum2);
} else {
    console.log("You Lose! " + computerNum2);
}

// for loop
// Initialisation
// Condition
// Increment

for (let i = 0; i <= 10; i++) {
    console.log("Hello" + i);
}

// Table

let table = 10;

for (let i = 1; i <= 10; i++) {
    console.log(table + " X " + i + " = " + table * i);
}