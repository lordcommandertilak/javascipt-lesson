const marvel_hero = ["Spiderman", "CaptainAmerica", "Ironman", "Thor"]
const dc_heros = ["Superman", "Batman", "GreenLanturn"] 

// marvel_hero.push(dc_heros)// includes arry as data
// const jointHearo = marvel_hero.concat(dc_heros) // joins two array
// console.log(jointHearo);

const all_new_heros = [...marvel_hero, ...dc_heros] // Spread Operation
// console.log(all_new_heros);

const another_arry = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_an_arry = another_arry.flat(Infinity)
console.log(real_an_arry); // convert branch array into one single structure array

console.log(Array.isArray("Luffy")); //check weather the given data is array or not?
console.log(Array.from("Luffy"));// convert any data/value into array

console.log(Array.isArray({name: "Zoro"})); // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
