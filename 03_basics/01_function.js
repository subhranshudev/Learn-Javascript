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

// console.log(loginUserMessage())
// console.log(loginUserMessage("sekhar"))


function calculateCartPrice(val1, val2, ...num1){                // ' ... ' --->rest
    return num1
}

console.log(calculateCartPrice(200, 400, 500,2000))

const user ={
    username: "subhranshu",
    price: 399
}

function handelObject(anyObject){
    console.log(`User name is ${anyObject.username} and price is ${anyObject.price}`);
}

// handelObject(user)
handelObject({
    username: "sam",
    price:199
})

const myNewArray =[200, 400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))

console.log(returnSecondValue([200, 400, 500, 1000]))