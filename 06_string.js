const name = "Leon"
const repoCount  = 20

//console.log(name +repoCount+" Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('Resident Evil') // its a object type string 

console.log(typeof(gameName));
console.log(gameName);
console.log(gameName[0]);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3)); //[3]=> i
console.log(gameName.indexOf('i'));

const superHero = "Spider-Man"

const newHero = superHero.substring(0,4); //cannot use -ve value, it will simply take 0
console.log(newHero);

const hero2 = superHero.slice(-8, 5) // -ve value can be used
console.log(hero2);

const withSpace = "      Ironman     "
console.log(withSpace);

console.log(withSpace.trim());

const url = "https://luffy.com/crew%20member"

console.log(url.replace('%20', '-'));
console.log(url.includes('luffy'));


const anime = new String("One Piece")
console.log(anime.split(' '));





