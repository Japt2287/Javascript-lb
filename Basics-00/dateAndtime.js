let mydte = new Date();

// console.log(mydte.toDateString());
// console.log(mydte.toISOString());
// console.log(mydte.toJSON());
// console.log(mydte.toLocaleDateString());
// console.log(mydte.toLocaleString());
// console.log(mydte.toLocaleTimeString());
// console.log(mydte.toString());
// console.log(mydte.toTimeString());
// console.log(typeof (mydte));

let myCreatedDate1 = new Date(2024, 11, 23)
let myCreatedDate = new Date("01-20-2024")

// console.log(myCreatedDate1.toDateString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();

// console.log(newDate);
// console.log(newDate.getHours());

// ` ${newDate.getDate()} and the time is `

newDate.toLocaleString('default', {
    weekday: "long",
    timeZone:"getTime"
});