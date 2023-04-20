// Sync Example
// alert("done");
// console.log("Hello Pakistan");

// Async Example
function runAfter1Sec() {
    setTimeout(function () {
        console.log("hello");
    }, 1000);
}
runAfter1Sec();
console.log("Pakistan Zindabad");

// CallBacks  // koi bhi func jis ko hum jab chalte hey jab humara kam complete ho jta hey or hum khud chalte hen

// function runAfter1Sec(val, cb) {
//     setTimeout(function () {
//         let data = 5 + val;
//         cb(data);
//     }, 1000);
// }

// // function toBeExecutedWhenDone(dataToGet) {
// //     console.log("Yes, It's done", dataToGet);
// // }

// runAfter1Sec(10, function (dataToGet) {
//     console.log("Yes, It's done", dataToGet);
// });
// console.log("Hello Pakistan");

// Callback Hell

// function runAfter1Sec(val, cb) {
//   setTimeout(function () {
//     let data = 5 + val;
//     cb(data);
//   }, 1000);
// }

// runAfter1Sec(10, function (dataToGet) {
//   runAfter1Sec(dataToGet, function(dataToGet1) {
//     runAfter1Sec(dataToGet1, function(dataToGet2) { // Callback Hell
//         console.log(dataToGet2);
//     });
//   });
// });
// console.log("Hello Pakistan");

// Promise

function runAfter1Sec(val) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            let data = 5 + val;
            // cb(data);
            resolve(data)
        }, 1000);
    })
}

runAfter1Sec(5)
    .then(function (data) {
        return runAfter1Sec(data);
    }).then(function (data) {
        return runAfter1Sec(data);
    }).then(function (data) {
        return runAfter1Sec(data);
    }).then(function (data) {
        console.log(data);
    });