// Arrow Functions

function add(x, y) {
    return x + y; // normal functions
}

const subtract = (x, y) => {
    return x - y;  // arrow functions
}

// const multiply = (x, y) => x * y;

// const round = num => Math.round(num);

// console.log(subtract(5, 3));
// console.log(multiply(5, 3));
// console.log(round(5.970));

const obj = {
    name: "Saylani",
    print: function () {
        setTimeout(() => {
            console.log(this.name);
        }, 1000);
    }
}

obj.print();

// function add (x = 5, y = 10) { // Default parameters
//   return x + y;
// }

// console.log(add(3, 7));

function printAll (x, y, ...z) { // Rest Parameter
  console.log(x, y, z);
}

printAll(5, 2, 8,[4,5,8],9);