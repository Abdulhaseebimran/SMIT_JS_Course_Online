// Array

// let months = ["Jan", "Feb", "Mar", "Apr", "May"];
// // months[4] = "May"; // Not recommended;
// // console.log(months.length);

// let shouldIStore = prompt("Array me value rakhun?");

// if (shouldIStore === "yes") {
//     months.push("June");
// }

let months = ["Jan", "Feb", "Mar", "Apr", "May"];

months.shift(); // Removes 1st index;
months.unshift("Jan"); // Add value on 1st Index
months.push("May"); // Add value on last+1 Index
months.pop();// Removes last index;
months.length // Tells the quantity of values

months.splice(2, 1, "June", "July", "August"); // Remove or replace values
months.slice(0, 2); // Provide a new copy of array;

let newArr = months.slice(0, 2);
console.log(months);
console.log(newArr);

let arr = ["Apple", "Orange", "Mango"];
// arr.forEach // loops through array values
arr.forEach(function (val, index) {
    console.log(index, val);
});

// arr.filter()// Filters Array values

let array1 = [1, 9, 3, 4, 5, 6, 8, 2, 10];
let filteredArr = array1.filter(function (val) {
    // return val %2 === 0 // shortcut 
    if (val % 2 === 0) {
        return true;
    } else {
        return false;
    }
});

console.log(filteredArr, array1);

// Array Sort
// arr.sort()

let array2 = [1, 9, 3, 4, 5, 6, 8, 2, 10];
let sortedArr = array2.sort(function (a, b) {
    if (a > b) {
        return 1;
    } else {
        return -1;
    }
});

console.log(sortedArr);

//Reduce

let array3 = [1, 9, 3, 4, 5, 6, 8, 2, 10];

let total = array3.reduce(function (PrevVal, currentVal) {
    return PrevVal + currentVal;
}, 0);

console.log(total);

let array4 = ["Happy", "Birthday", "Haseeb"];
let wish = array4.reduce(function (PrevVal, currentVal) {
    return PrevVal + " " + currentVal;
}, "");

console.log(wish);

let array5 = ["Happy", "Birthday", "Abdullah"];
let finalString = "";

array5.forEach(function (val) {
    finalString = finalString + " " + val;
});

console.log(finalString);

// Array.map()  mujhe khud cover karna hey!