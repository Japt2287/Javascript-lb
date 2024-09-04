
// reactMe = () => {

// }

function sayMyName (){
    console.log("Japtavya");
    

}

// sayMyName();

// function addTwoNum (num1, num2){

//     console.log(num1+num2);
    

// }

function addTwoNum (num1, num2){

    // let res = num1 + num2;
    // return res; 
    return num1+num2;

}
const sum = addTwoNum(3, 5);
// console.log(sum);



// Including Parameteres and using arguments
function loginUserMessage(username = "Bob"){
    if(!username){
        
        console.log("Put Your Name Please!");
        return
         
    }
    
    return `${username} just Logged in`;
        
        
    
    

}
// console.log(loginUserMessage("Jas"));

// -------------------x-----------------------x------------x


// Rest Operator/ Spread operator(...)
// function calculateCartPrice(...num1){
//     return num1;

// }
// console.log( calculateCartPrice(200, 400, 600));

const user = {
    username: "Japtavya",
    number: 12000
}

// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.number}`);
    
// }
// // handleObject(user);
// handleObject({
//     username: "Sam",
//     number: 399
// });

const myNewArray = [200, 300, 400, 500]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));

