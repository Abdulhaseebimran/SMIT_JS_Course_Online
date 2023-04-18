const date = new Date();

console.log(date);
console.log(date.getDate());

const months = ["January", "Feb", "Mar", "Apr"];
console.log(months[date.getMonth()]);
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMinutes());

date.setDate(20);
console.log(date);

// Example

const doomsDay = new Date();

doomsDay.setDate(15);
doomsDay.setMonth(10);
doomsDay.setFullYear(2025);
doomsDay.setHours(0);
doomsDay.setMinutes(0);

const date2 = new Date();

let differnce = doomsDay.getTime() - date.getTime();

console.log((differnce / (1000 * 60 * 60 * 24 * 365.25)).toFixed(1));

// Digital Clock 

const hoursElem = document.getElementById("hours");
const minutesElem = document.getElementById("minutes");
const secondsElem = document.getElementById("seconds");
const amPmElem = document.getElementById("amPm");



setInterval(function () {
    const date3 = new Date();
    let hours = date3.getHours();
    let amPm = "AM";
    if (hours > 11) {
        amPm = "PM";
        if (hours > 12) {
            hours -= 12;
        }
    }
    hoursElem.innerText = hours;
    minutesElem.innerText = date3.getMinutes();
    secondsElem.innerText = date3.getSeconds();
    amPmElem.innerText = amPm;
}, 1000);

