//nesting,  callback hell
function getData(dataId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //console.log("data" , dataId);
            resolve("success")
           }, 2000);
    })
   
}



// // promise chain
// getData(1)
// .then((res) => {
//     return getData(2)
// })
// .then((res) => {
//     return getData(3)
// })
// .then((res) => {
//     console.log(res);
// })

// // callback hell
// getData(1, () => {
//     getData(2,() => {
//         getData(3, () => {
//             getData(4)
//         })
//     })
// })



// let promise = new Promise((resolve , reject) => {
//     console.log("I am a promise");
//     reject(123)
// })

// console.log(promise);

// async function hello(){
//     console.log("hello");
// }

// let userName = "Subhranshu"

// function printMe(){
//     let email = "Sekhar@gmail.com"
//     console.log(userName);

//     function print2Me(){
//         console.log(`Inner function: ${userName}`);
//         console.log(`Inner function: ${email}`);
//     }
//     print2Me()
    
// }
// printMe()
// // console.log(email);
 

// let bigNum = 1n
// console.log(typeof bigNum);


// const str1 = new String("Hello")
// console.log(typeof str1);

let myDate = new Date()

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());

// let newDate =  new Date(2024, 0, 25, 5, 3, 45)
// console.log(newDate.toLocaleString());


function add2nums(num1 , num2){
   return num1 + num2
    
}

// let finalans = add2nums(2, 3) 
// console.log(finalans);
// // console.log(add2nums(2, 3));


// console.log(addOne(5))
// function addOne(num){
//     return num + 1
// }

// addTwo(5)
// const addTwo = function(num){
//         return num + 2
// }

// const myObject = {
//     js: 'Javascript',
//     cpp: 'C++',
//     rb: "Ruby",
//     swift: "Swift by apple"
// }

// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`);
  
// }

// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })

// const gameName = new String('subhranshu')
// const anotherString = gameName.slice(-5 , -1)
// console.log(anotherString);
// // console.log(gameName.charAt(9));


const myObject = {
    js: 'Javascript',
    cpp: 'C++',
    rb: "Ruby",
    swift: "Swift by apple"
}

for (const key in myObject) {
   // console.log(key);
    

   console.log(`${key} shortcut is for ${myObject[key]}`);
}