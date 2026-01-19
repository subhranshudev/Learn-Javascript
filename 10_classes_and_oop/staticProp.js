class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return 123
    }
}

const hitesh = new User("hitesh")

hitesh.logMe()
console.log(hitesh.createId())
