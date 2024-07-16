// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2024, 0, 25)     // indexing of months start from 0
// let myCreatedDate = new Date(2024, 0, 25 , 5 , 3)
// let myCreatedDate = new Date("2024-01-25")         //in yy-dd-mm declaration numbers of months start from 01 as usual
let myCreatedDate = new Date("01-25-2024")         // mm-dd-yy
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));       // conversion into seconds

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);   // result is 6 because here indexing of month is starting from 0; So +1 is done to get simplified ans
// console.log(newDate.getDate());
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

 anotherDate= newDate.toLocaleString('default',{
    weekday: "long"
})

console.log(anotherDate);