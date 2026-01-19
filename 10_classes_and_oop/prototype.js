let myName = "hitesh     "

// console.log(myName.trim().length);
//  console.log(myName.trueLength());


// ***********Remaining code***********

// modern syntax
// Object.setPrototypeOf(TeachingSupport, Teacher)    // ---> similar to: TeachingSupport.__proto__ = Teacher

let anotherUserName = "ChaiAurCode    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}
anotherUserName.trueLength()
"Hitesh".trueLength()
"subhranshu".trueLength()
myName.trueLength()

// Hence everything in Javascript is an Object
