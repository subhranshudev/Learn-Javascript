const user = {
    userName: "Subhranshu",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database");
        // console.log(`Username: ${this.userName}`);       // this ---> current context
        console.log(this);
    }
}

// console.log(user.userName);
// console.log(user.getUserDetails());
//  console.log(this);

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this
}

const userOne = new User("HItesh", 12, true)
const userTwo = new User("ChaiaurCode", 11, false)
console.log(userOne);
console.log(userTwo);