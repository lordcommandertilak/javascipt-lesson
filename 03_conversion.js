let score = "33"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof(valueInNumber));

let numStrint = "24abc"

let convNum = Number(numStrint)
console.log(convNum); //NaN = Not a Number

let forNull = null
let convNll = Number(forNull)
console.log(convNll); // conver to 0

let forUndef = undefined
let convUndef = Number(forUndef)
console.log(convUndef); // conver to NaN

//"33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); //True

let checkEmpty = ""
let booleanEmpty = Boolean(checkEmpty)
console.log(booleanEmpty); // False

let checkNotEmpty = "asd"
let booleanNotEmpty = Boolean(checkNotEmpty)
console.log(booleanNotEmpty); //True

// 1 => True; 0 =>false
// "" => false
// "abc" => true

let someNumber = 12
let stringNum = String(someNumber)
console.log(typeof(stringNum));

let someNull = null
let nullNum = String(someNull)
console.table([nullNum, typeof(nullNum)]);

let someUndef = undefined
let undefNum = String(someUndef)
console.table([undefNum, typeof(undefNum)]);


// ******************* Operations ***********

// 2+2, addition, substraction etc

let valu1 = 12
let negValue = -valu1
console.log(negValue);

console.log(2+2); //addition
console.log(2-2); //subtraction
console.log(2*2); //multiplication
console.log(2%2); // Modulus .. find reminder
console.log(2**3); //Power
console.log(2/2); // division



let str1 = "Hello"
let str2 = " World"

let str3 = str1+str2
console.log(str3);

console.log("1" +2); // 12
console.log(1 + "2"); // 12
console.log("1" +2 +2); // 122
console.log(2 + 2 + "1"); // 41

console.log(true); // true
console.log(+true); // 1
console.log(+""); // 0

let num1, num2, num3
num1 = num2 = num3 = 3+1


let gameCounter = 100
gameCounter++
console.log(gameCounter);




