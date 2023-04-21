// HTTP Request

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//        .then(function (response){
//         return response.json();
//        })
//        .then(function(data){
//         console.log(data);
//        })

// Posts
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data);
//     })

// photos

// const imageContainer = document.getElementById("images");
// fetch('https://jsonplaceholder.typicode.com/photos')
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         data.forEach(function (images) {
//             const url = images.url;
//             const imageElem = document.createElement("img");
//             imageElem.src = url;
//             imageContainer.appendChild(imageElem);
//         })
//     })

// get => read data
// post => create data
// put => update data
// delete => delete data

// post or add
// fetch('https://dummyjson.com/products/add', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
//     title: 'BMW Pencil',
//     description: 'This is an amazing pencil.',
//     price: 1000,
//   })
// })
// .then(res => res.json())
// .then(console.log);

// put
fetch('https://dummyjson.com/products/1', {
    method: 'PUT', /* or PATCH */
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        title: 'iPhone Galaxy +1'
    })
})
    .then(res => res.json())
    .then(console.log);


// delete
fetch('https://dummyjson.com/products/1', {
    method: 'DELETE',
})
    .then(res => res.json())
    .then(console.log);


