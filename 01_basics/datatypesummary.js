// Primitive

// 7types :string, number, boolean, null, undefined, symbol, bigint
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsoideTemp = null
let userEmail;

const Id = Symbol('123')
const anotherId = Symbol('123')

console.log( Id === anotherId);

const bigNumber = 959734987428057n
console.log(typeof  anotherId);

// Reference (Non Primitive)

//Array, objects, Functions

const heros = [ "shaktiman" , "nagraj" , "doga"];
let myObj = {
    name :"subhranshu",
    age:19,
}

const myFunction = function (){
    console.log("Hello World");
}

console.log(typeof myFunction);
console.log(typeof heros);
console.log(typeof myObj);

// The returntype of all Non Premitive datatype is Object

// Javascript is a dynamically typed language. You don't need to explicitily declare the type of a variable when you create it.