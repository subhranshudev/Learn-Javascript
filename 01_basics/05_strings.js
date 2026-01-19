const name = "subhranshu"
const repoCount = 1

// console.log( name + repoCount + " value");

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // modern String  ---  string interpolation

const gameName = new String("subhranshu-sekhar-com")  // Using new String("subhranshu-sekhar-com") creates a String object in JavaScript. However, it's typically better to use string literals.

//console.log(gameName[0]);
//console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toUpperCase());
//console.log(gameName.charAt(2));
//console.log(gameName.indexOf('b'));

const newString = gameName.substring(0 , 4)
//console.log(newString);

const anotherString = gameName.slice(-9, 4)
//console.log(anotherString);

const newStringOne = "    subhranshu    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url  = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'));
console.log(url.includes('hitesh'));
console.log(url.includes('sundar'));
console.log(gameName.split('-'));