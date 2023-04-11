// Write a function that creates a closure and returns a function that can add
// a specific number to any number passed to it. For example, if the closure is
// created with 5, the returned function should add 5 to any number passed
// to it.

function add(num) {
    return function (x) {
        return x + num;
    };
}

let addNum = add(5);
console.log(addNum(5));
console.log(addNum(10));

// Write a recursive function that searches an array for a specific value. The
// function should return true if the value is found, and false if it is not. You
// can assume that the array is not nested.

const arr = [0, 1, 2, 3, 4, 55, 89, 90, 100, 39, 20];
function searche(arr, val) {
    if (arr.length === 0) {
        return false;
    }
    if (arr[0] === val) {
        return true;
    } else {
        return searche(arr.slice(1), val);
    }
}

let val = +prompt("Enter a value : ");
console.log(searche(arr, val));
// console.log(searche(arr, 2));
// console.log(searche(arr, 4));

// Write a function that adds a new paragraph element to the bottom of an
// HTML document. The function should take a string argument that will be
// used as the text content of the new paragraph element.

function para(text) {
    let add = document.getElementById("text");
    add.innerText = text;
}

let text2 = prompt("Enter some words or line?");
para(text2);

// Write a function that adds a new list item to an unordered list in an HTML
// document. The function should take a string argument that will be used as
// the text content of the new list item

function addList(list) {
    let val2 = document.querySelector('ul');
    for (let i = 0; i < list.length; i++) {
        let li = document.createElement('li');
        li.textContent = list[i];
        val2.appendChild(li);
    }
}

let newList = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];
addList(newList);

// Write a function that changes the background color of an HTML element.
// The function should take two arguments: the first argument is a reference
// to the HTML element, and the second argument is a string representing
// the new background color

function changeColor(ref, backColor) {
    let doc = document.getElementById(ref);
    doc.style.backgroundColor = backColor;
}

changeColor("change", "blue");

// Write a function that saves an object to localStorage. The function should
// take two arguments: the first argument is a string representing the key to
// use for storing the object, and the second argument is the object to store.

let languages = {
    "Java": "Andoird Development",
    "JavaScript": "Web Development",
    "Python": "Data Science",
    "Flutter": "App Development",
}

function obj(key, object) {
    localStorage.setItem(key, JSON.stringify(object));
}

obj("data", languages);

// Write a function that retrieves an object from localStorage. The function
// should take one argument, which is a string representing the key used to
// store the object. The function should return the object.

function dataLocalStorage(key) {
    return localStorage.getItem(key);
}

console.log(dataLocalStorage("data"));

// Write a function that takes an object and saves each property to
// localStorage using the property name as the key and the property value as
// the value. The function should also retrieve the object from localStorage
// and return it as a new object.

function saveData(obj1) {

    let keys = Object.keys(obj1)

    keys.forEach(function (key, index) {
        localStorage.setItem(key, obj1[key])
    })

    let newObj = {}
    keys.forEach(function (key, index) {
        let value = localStorage.getItem(key)
        newObj[key] = obj1[key]

    })
    return newObj
}

let obj1 = {

    name: "Abdul Haseeb Imran",
    age: 20,
}

let retrieve = saveData(obj1)
console.log(retrieve);