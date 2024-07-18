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

// const addTwo = (num1,num2) => {
//     return num1 +num2
// }

// const addTwo = (num1,num2) => ( num1 +num2 )                
const addTwo = (num1,num2) => ({username: "subhranshu"})


console.log(addTwo(3,4))