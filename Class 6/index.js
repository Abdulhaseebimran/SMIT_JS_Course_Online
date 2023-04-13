// Objects

let person = {  // person = object
    name: "Haseeb", // name = property
    cnic: 123456,  // cnic = key
    age: 20,
    canSpeakEnglish: false,
    eyesColor: "black", // eyesColor = value
    speak: function (sentence) { // method
        console.log(sentence + this.name);
    }
}
person.speak("Hello I'm ");
console.log(person);
console.log(person.age);

let perosn2 = {
    name: "Haseeb",
    cnic: 123456,
    age: 20,
    canSpeakEnglish: false,
    speak: function (sentence) { // method
        return sentence + this.name;
    }
}

perosn2.speak();
console.log(perosn2.cnic);

let animal = {
    name: "Lion",
    eatsMeat: true,
    eatsGrass: false
};
let animal2 = {
    name: "Goat",
    eatsMeat: false,
    eatsGrass: true
}

let student1 = {
    name: "Hamza",
    rollNo: 420,
    teacher: "Nadir",
    className: "JavaScript"
};

let student2 = {
    name: "Farrukh",
    rollNo: 421,
    teacher: "Ameen",
    className: "CSS"
};

let student = [student1, student2];
console.log(student);


// function previousStudent(name, rollNo, teacher, className) {
//     return {
//         name: name,
//         rollNo: rollNo,
//         teacher: teacher,
//         className: className,
//     }
// }

// let student3 = [previousStudent("Haseeb", 123, "Ishaq", "javascript"),
// previousStudent("Abdullah", 124, "Ishaq", "javascript"),
// previousStudent("Farrukh", 125, "Ishaq", "javascript")];
// console.log(student3);

let prevStudent = localStorage.getItem("student4"); // get from LocalStorage
let student4 = prevStudent ? JSON.parse(prevStudent) : [];  // ternary operators
function provideStudent1() {
    let std = {
        name: prompt("Enter your name"),
        rollNo: +prompt("Enter your RollNo"),
        teacher: prompt("Enter your teacher name"),
        className: prompt("Enter your class Name"),
    }
    student4.push(std);
    console.log(student4);
    let stringify = JSON.stringify(student4);  // Convert it to String
    localStorage.setItem("student4", stringify); // Save it to LocalStorage
}

