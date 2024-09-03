// Singleton

// Object.create

// Object literals

// const mySym = Symbol("Key1")

// const jsUser = {
//     name: "Japtavya",
//     "Full Name": "Japtavya Singh",
//     [mySym]:"Key12",
//     age: 21,
//     gender: "Male",
//     email: "japtavya@gmail.com",
    // isLoggedIn: true,
    // lastLoginDays: ["Monday", "Saturday"]
// }
// console.log(jsUser.email);
// console.log(jsUser["email"]); // access this way too(Recommended)

// console.log(jsUser["Full Name"]);
// console.log(jsUser[mySym]);



// Object.freeze(jsUser); // freeze an elemnt in abject
// jsUser.email = "chatgpt@gmail.com";
// console.log(jsUser.email);

// +++++++++++++ Functions ++++++++++++++++


// jsUser.greetings = function(){
    // console.log("Hello JS User");
// }
// console.log(jsUser.greetings());

// jsUser.greetings2 = function(){
    // console.log(`Hello JS User, ${this.name}`);
// }
// console.log(jsUser.greetings2());


// ++++++++++++++++ Objects +++++++++++++++++


const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "John"
tinderUser.isLoggedIn = (false)

// console.log(tinderUser);

const regularUder = {
    // email: "sum@gmail.com",
    fullname: {
        userFullName:{
            firstName: "Jptavya",
            lastName: "Singh"

        }
    }
}

//console.log(regularUder.fullname?.userFullName);

const obj1 = {1:"a", 2:"b", 3:"c"}
const obj2 = {4:"d", 5:"e"}
const obj4 = {6:"d", 7:"e"}

// const obj3 = {obj1, obj2} //No, No, No
// const obj3 = Object.assign({}, obj1, obj2, obj4)
// console.log(obj3);

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);

const users = [
    {
    id:1,
    email:"j@gmail.com"
}
]
// users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// +++++++++++++++ More About Objects +++++++++++

//Destructuring

const course = {
    courseName:"js in hindi",
    price: "999",
    courseInstructor: "Japtavya"
}
// course.courseInstructor

const {courseInstructor: instructor} = course
// console.log(courseInstructor);
console.log(instructor);

// whenever you see curly braces, you should know that we were using Destructuring there l8ike below:-

// const navbar = ({company}) => {

// }

// navbar(comapny = "Japtavya")
// {
//     "name": "Japtavya",
//     "courseName": "JS in hindi",
//     "price": "Free"
// }

// JSON format
{
    "name": "Japtavya",
    "course": "JS in Hindi",
    "price": "299"
}

[
    {},
    {},
    {}
]





