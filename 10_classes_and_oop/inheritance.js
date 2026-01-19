class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(` USERNAME: ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai","chai@gmail.com",1234)
chai.addCourse()
console.log(chai instanceof Teacher);
console.log(chai instanceof User);