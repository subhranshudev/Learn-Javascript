// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullname:{
            firstName: "Subhranshu",
            lastName: "Sekhar"
        }
    }
}

 console.log(regularUser.fullName.userFullname.firstName);   

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2,}

//console.log(obj3);

const users = [
    {
        id: 1,
        email:" h@gmail.com"
    },
    {
        id: 1,
        email:" i@gmail.com"
    },
    {
        id: 1,
        email: " h@gmail.com"
    },
    {
        id: 1,
        email:" h@gmail.com"
    }
]

// console.log(users[1].email)

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//************  de-structure  **********************/
const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

// course.courseInstructor

// const {courseInstructor: instructor} = course

// console.log(courseInstructor);   

// console.log(instructor);        // we can also rename the keys when de-dtructuring


//************ JSON  ****************/

//  JSON, which stands for JavaScript Object Notation, is a lightweight data interchange format that's easy 
//  for humans to read and write and easy for machines to parse and generate. It’s commonly used to transmit 
//  data between a server and a web application.

// Key Characteristics of JSON:
//    Text-Based Format: JSON is a text format that can be easily read and written by humans.
//    Data Structure: It represents data as key-value pairs, similar to JavaScript objects.

// Syntax:  
//     Objects: Enclosed in curly braces {}. Contains key-value pairs. For example:

// {
//     "name": "subhranshu",
//     "courseName": "js in hindi"
//     "price": "free"
// }

 // Sometimes the data also comes in form of Array
[
    {},
    {},
    {}
]

// Using JSON in JavaScript:
//   1. Parsing JSON:
//    To convert a JSON string into a JavaScript object, we can use JSON.parse():

        const jsonString = '{"name": "Alice", "age": 25}';
        const userObject = JSON.parse(jsonString);
    //  console.log(userObject.name); // Outputs: Alice


// 2. Stringifying Objects:
// To convert a JavaScript object into a JSON string, we can use JSON.stringify():

        const user = {
            name: "Alice",
            age: 25
        };
        const JsonString = JSON.stringify(user);
//      console.log(JsonString); // Outputs: {"name":"Alice","age":25}
  
// JSON is commonly used for sending data between a client and a server in web applications (e.g., through APIs).
