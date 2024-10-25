const user = {
    username: "subhranshu",
    price: 999,
                                         // this ---> refers to current context 
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "subhranshu"
//     console.log(this.username);
// }
// chai()

// const chai = function(){
//     let username = "subhranshu"
//     console.log(this.username);
// }
// chai()

const chai = () => {
    let username = "subhranshu"
    console.log(this);
}
// chai()


const person = {
    name: 'Alice',
    greet: () => {
      console.log(`Hello, I am ${this.name}`);
    }
  };
  
 // person.greet();   // "Hello, I am undefined" (in non-strict mode, `this` is `window`)
 //  Here, this in the arrow function does not refer to the person object. Instead, it refers to this in the 
 //  outer lexical scope, which is the global object in this case.
  

// const addTwo = (num1,num2) => {
//     return num1 +num2
// }

// const addTwo = (num1,num2) => ( num1 +num2 )                
const addTwo = (num1,num2) => ({username: "subhranshu"})


console.log(addTwo(3,4))