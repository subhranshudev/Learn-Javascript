// singleton
// Object.create  --> constructor

// object Literals

const mySym = Symbol("key1")

const JsUser = {
    name: "subhranshu",
    "full name": "Subhranshu Sekhar",
    [mySym]: "mykey1",
    age: 18,
    location: "Paradeep",
    email: "subhranshu@google.com",
    isLoggedIn: false,
    lastLoginDays:["Monday", "Sturday"]
    }

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "subhranshu@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "subhranshu@microsoft.com"
//console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello Js User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());