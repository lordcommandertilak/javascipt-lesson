// Array

const myArry = [0, 1, 2, 3, 4, 5]

console.log(myArry[0]);

const myHero = ["Spiderman", "Loki"]

const myArry2 = new Array(1, 2, 3, 4)

// Arry menthos

// myArry.push("hero")// insert to array
// myArry.push("villan")// insert to array
// myArry.pop()// remove from array

// myArry.unshift(2)
// myArry.shift()

// console.log(myArry);
// console.log(myArry.includes(2));
// console.log(myArry.indexOf(3));

const newArr = myArry.join()// convert to string 

// console.log(myArry);
// console.log(newArr);

// slice, splice

console.log("A ", myArry);

const myn1 = myArry.slice(1, 3)

console.log(myn1);
console.log("B ", myArry);

const myn2 = myArry.splice(1, 3)
console.log(myn2);
console.log("C ", myArry);