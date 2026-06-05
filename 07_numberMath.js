const score = 400

const balance = new Number(1000) // object type
console.log(typeof(balance));
console.log(balance.toString().length);

console.log(balance.toFixed(2));

const otherNum = 12.31223

console.log(otherNum.toPrecision(4));

const hundred = 1000000
console.log(hundred.toLocaleString('en-IN'));

// ++++++++++++++++++++ MATH  +++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.99));
console.log(Math.ceil(7.09876));
console.log(Math.floor(4.9));
console.log(Math.min(23,2,45,3));
console.log(Math.max(23,2,45,3));


// Math.random() ==> provide values between 0 & 1
console.log((Math.random()*10) +1); // +1 to remove 0 case 
console.log(Math.floor(Math.random()*10) +1);

const min = 10
const max = 20


console.log(Math.floor(Math.random() * (max-min + 1)) + min );
