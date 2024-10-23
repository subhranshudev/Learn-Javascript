const score = 400
//console.log(score);

const balance = new Number(100) // In JavaScript, using new Number(100) creates a Number object. However, it's generally better to use the primitive number type directly. 
//console.log(balance);

//console.log(balance.toString());
//console.log(balance.toFixed(2));

const otherNumber = 23.8966

//console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN'));

//************* MATHS **************/

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.3));
// console.log(Math.ceil(4.3));
// console.log(Math.floor(4.6));
// console.log(Math.min(2,4,1,9));
// console.log(Math.max(8,2,4,6));

console.log(Math.random());
console.log((Math.random() * 10 )+ 1);
console.log(Math.floor(Math.random()*10 ) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);  //again see