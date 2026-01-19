// const promiseOne = new Promise(function(resolve , reject){
//     //Do an async task
//     //DB calls, cryptography, network 
//     setTimeout(function(){
//         console.log('Async task is completed');
//         resolve()
//     }, 1000);
// })

// promiseOne.then(function(){
//     console.log("Promise consumed");
// })

// new Promise(function(resolve, reject){
//    setTimeout(function(){
//     console.log("Async task two");
//     resolve()
//    }, 1000);
// }).then(function(){
//     console.log("Async 2 resolved");
// })

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({userName: "subhranshu" , email: "chai@example.com"})
//     }, 1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "Subhranshu" , password: 123})
//         } else {
//             reject('ERROR: Something went wrong')  
//         }
//     } , 1000)
// })

// promiseFour.then((user) =>{
//     console.log(user);
//     return user.username
// }).then((userName) => {
//     console.log(userName);
// }).catch(function(error){
//     console.log(error);
// }).finally(() => console.log("The promise is either resolved or rejected"))



// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "Javascript" , password: 123})
//         } else {
//             reject('ERROR: JS went wrong')  
//         }
//     } , 1000)
// })

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive    // If the promise is resolved then its resulting value will be transfered into the variable
//         console.log(response);
//     } catch (error) {                        // If the promise is rejected then its resulting error will be transfered into the catch block
//         console.log(error);
//     }
// }

// consumePromiseFive()

async function getAllUsers(){
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data);
  } catch (error) {
    console.log("E: ", error);
  }
}

getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))



// source: MDN
// JSON is a text-based data format following JavaScript object syntax, which was popularized by Douglas Crockford. Even though it closely
// resembles JavaScript object literal syntax, it can be used independently from JavaScript, and many programming environments feature the
// ability to read (parse) and generate JSON.

// JSON exists as a string — useful when you want to transmit data across a network. It needs to be converted to a native JavaScript 
// object when you want to access the data. This is not a big issue — JavaScript provides a global JSON object that has methods available 
// for converting between the two.