// DOM document object model

let myPara = document.getElementById("my-para");
// myPara.innerText = "Hello world I'm Abdul Haseeb";

let myPara2 = document.querySelector("#my-para");
myPara2.innerHTML = "<b>Pakistan Zindabad</b>"
myPara2.style.backgroundColor = "green";
myPara2.style.color = "#fff";
console.log(myPara);


setInterval(function () {
    if (myPara2.style.display === "none") {
        myPara2.style.display = "block";
    } else {
        myPara2.style.display = "none";
    }
}, 500);

let yourPara = document.querySelector("#your-para");
yourPara.innerHTML = "<b>Pakistan Zindabad</b>";
yourPara.style.backgroundColor = "#000";
yourPara.style.color = "#fff";
yourPara.style.width = "100%";
console.log(yourPara);

setInterval(function () {
    let width = myPara2.style.width;
    if (width === "100%") {
        myPara2.style.width = "10%";
    } else {
        width = +width.replace("%", "");
        myPara2.style.width = width + 10 + "%";
    }
}, 500);

let para2 = document.getElementById("para2");
para2.innerHTML = "<b>Abdul Haseeb Imran</b>"
setInterval(function () {
    let color1 = Math.floor(Math.random() * 16777215).toString(16);
    let color2 = Math.floor(Math.random() * 16777215).toString(16);
    para2.style.backgroundColor = "#" + color1;
    para2.style.color = "#" + color2;
}, 500);