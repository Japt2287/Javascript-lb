// Arrays

// const myArr = [1, 2, 3, 4, 5];
// const myHeros = ["Ironman", "Hulk"]

// console.log(myArr[0]);
// console.log(myHeros);


//  Array Methods

// myArr.push(6)
// console.log(myArr);

// myArr.pop()
// console.log(myArr);

// myArr.unshift(5)
// console.log(myArr);
// myArr.shift();
// console.log(myArr);

// console.log(myArr.includes(3));
// console.log(myArr.indexOf(3));

// const nreArr = myArr.join();
// console.log(nreArr);

//slice, splice

// console.log("A ", myArr);
// const myN1 = myArr.slice(1, 3);
// console.log(myN1);
// console.log("B ", myArr);

// const myN2 = myArr.splice(1, 3);
// console.log("C ", myArr);
// console.log((myN2));

// Array part 2

const marvel_heros = ["Thor", "Spiderman", "Hulk"]
const dc_heros = ["Superman", "Wonder Women", "Flash"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros[3][1]);
// console.log(marvel_heros);

// let crow = marvel_heros.concat(dc_heros)
// console.log(crow);

const all_new_heros = [...marvel_heros, ...dc_heros] //Using Spread
// console.log(all_new_heros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7,[4, 5]]]

const real_another_array = anotherArray.flat(Infinity);
// console.log(real_another_array);


// console.log(Array.isArray("japtavya"))
// console.log(Array.from({name:"japtavya"})); //Interesting

// converting various individual variables in single Array
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));









