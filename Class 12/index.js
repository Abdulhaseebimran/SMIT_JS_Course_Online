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

function printAll(x, y, ...z) { // Rest Parameter
    console.log(x, y, z);
}

printAll(5, 2, 8, [4, 5, 8], 9);

//  Short Syntax for Objects

const firstName = "Abdul";
const lastName = "Haseeb";

const obj1 = {
    firstName,
    lastName,
    printName() {
        console.log("Abdul Haseeb Imran");
        console.log(this.firstName, this.lastName);
    }
}

obj1.printName();
//  const {firstName, lastName} = obj;

// console.log(firstName);

// const arr = ["Ishaq", "Bhojani", "Saylani"];
// const [, lastName, abc] = arr;

// console.log(arr);

// Spread Operators

// const arr = ["Ishaq", "Bhojani", "Saylani"];

// const newArr = ["Some Data", ...arr, "Another Data"];

// console.log(newArr);

const obj3 = {
    firstName: "Ishaq",
    lastName: "Bhojani"
};

const newObj = { ...obj3, hobby: "Video Games", firstName: "Yaseen" };
console.log(newObj);

// OOPs 
// Classes

// const obj = {
//   name: "LED TV",
//   price: 12000
// };

// const obj2 = {
//   title: "Samsung Galaxy",
//   amount: 140000
// }

// const products = [obj, obj2];

// products.forEach(p => console.log(p.name));

class Product {
    constructor (title, price) {
      this.title = title;
      this.price = price;
    }
  }
  
  const product1 = new Product("LED TV", 12000);
  const product2 = new Product("Samsung Galaxy", 140000);
  const products = [product1, product2];
  
  products.forEach(p => console.log(p.title));