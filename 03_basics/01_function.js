function sayMyName(){
    console.log("s");
    console.log("e");
    console.log("k");
    console.log("h");
    console.log("a");
    console.log("r");
}

// sayMyName()

// function addTwoNumbers(number1, number2) {
//        console.log( number1 + number2);
// }

// function addTwoNumbers(number1, number2) {
//     let result = number1 + number2;
//     return result;
// }
 
function addTwoNumbers(number1, number2) {
    return number1 + number2;
}

const result= addTwoNumbers(3 , 4)
// console.log( "Result:", result);

// function loginUserMessage(username) {
//     if(username === undefined){
//       console.log("please enenter a username")
//       return
//     }
//    return `${username} just logged in`
// }

function loginUserMessage(username) {
    if(!username){
      console.log("please enenter a username")
      return
    }
   return `${username} just logged in`
}

console.log(loginUserMessage())