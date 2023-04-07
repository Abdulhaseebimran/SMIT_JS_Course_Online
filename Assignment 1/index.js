// write a program in javascript that accepts two input in prompt and retun larger number

let num1 = +prompt("Enter the first number ");
let num2 = +prompt("Enter the second number ");

if (num1 > num2) {
    console.log(num1);
} else {
    console.log(num2);
}

// Write a JavaScript conditional statement to find the sign of a number. Display
// an alert box with the specified sign.

let num = prompt("Enter The Number : ");

if (num >= 0) {
    alert("the sign of the number is positive");
} else {
    alert("the sign of the number is Negative");
}

// Write a JavaScript program that accepts five numbers in five prompts and
// displays the larger one in the console

let num4 = prompt("Enter the first Number : ");
let num5 = prompt("Enter the second Number : ");
let num6 = prompt("Enter the third Number : ");
let num7 = prompt("Enter the fourth Number : ");
let num8 = prompt("Enter the fifth Number : ");

let largest = 0;

if (num4 > largest) {
    largest = num4;
}
if (num5 > largest) {
    largest = num5;
}
if (num6 > largest) {
    largest = num6;
}
if (num7 > largest) {
    largest = num7;
}
if (num8 > largest) {
    largest = num8;
}

console.log("largest number is ", largest);

// Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it
// will check if the current number is odd or even, and display a message to the
// screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"

for (let i = 0; i <= 15; i++) {
    if (i % 2 == 0) {
        console.log(i + "number is even");
    } else {
        console.log(i + "number is odd");
    }
}

// Write a JavaScript program which computes the average marks of the
// following students Then, this average is used to determine the corresponding
// grade.

let averageMarks = +prompt("Enter your average marks : ");
let grade = "";

if (averageMarks < 100 && averageMarks >= 90) {
    grade = "A";
} else if (averageMarks < 90 && averageMarks >= 80) {
    grade = "B";
} else if (averageMarks < 80 && averageMarks >= 70) {
    grade = "C";
} else if (averageMarks < 70 && averageMarks >= 60) {
    grade = "D";
} else {
    grade = "F";
}
console.log("Your Grade is " + grade);

// Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five
// print "Buzz". For numbers which are multiples of both three and five print
// "FizzBuzz".

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Bizz");
    } else {
        console.log("");
    }
}

// Write a JavaScript program to construct the following pattern, using a nested
// for loop.
// *
// * *
// * * *
// * * * *
// * * * * *

for (let i = 0; i < 5; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
        row += "*";
        // row++;
    }
    console.log(row);
}