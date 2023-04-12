// Function
// alert, parseInt = built-in function
// greet = custom function

function greet(stdName) {
    // parameter
    console.log("Hello " + stdName);
}

greet("Haseeb"); // Argument
greet("Ammar"); // Argument
greet("Abdul"); // Argument

function employee(fileNo) {
    return "Working on file No : " + fileNo;
}

let data = employee(21);
console.log(data);

function add(num1, num2) {
    return num1 + num2;
}

let result = add(3, 12);
console.log(result);
document.write(result);

// Recursion
// -----------------

function writeData(data, times) {
    document.write(data);
    if (times > 0) {
        writeData(data, times - 1);
    }
}

writeData("ABDUL ", 5);

// factorial

function factorial(num) {
    if (num > 1) {
        return num * factorial(num - 1);
    }
    return 1;
}

console.log(factorial(5));

// Closures => Scopes
// Global Scope => whole file
// local scope => inside function

let abc = 7; // Global Scope
function print(def) {
    //  def = local scope
    return function (ghi) { // anonymous function
        console.log(def + ghi)
    }
}

let innerFunction = print(2);
let innerFunction2 = print(5);
innerFunction(7)
innerFunction2(5)

function saveUrl(url) {
    return function () {
        fetch(url)
        .then(response => response.json())
        .then(json => console.log(json))
    }
}
// Save url
let makeRequest = saveUrl('https://jsonplaceholder.typicode.com/todos/1');

// request attempt
makeRequest();
makeRequest();