const userEmail = "luffy@mail.ai"

if (userEmail) {
    console.log("Got user email");
    
} else {
    console.log("Don't have user email");
    
}

// falsy values-------------------

// false, 0, "", -0, BigInt 0n, null, undefined, NaN

// Truthy values--------------------

// true, "0", [], 'false', 1, " ", {}, function(){} => empty function 

const myArry = []

if (myArry.length === 0) {
    // console.log("Array is empty");
    
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    // console.log("Object is empty");
    
}

// Nullish Coalescing Operator (??) : null undefined ---------------------

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 12
val1 = null ?? 10 ?? 12


console.log(val1);

// Terniary Operator----------------------

// condition ? true : false

const gamePrice = 1000

gamePrice >= 500 ? console.log("Greater than 500"): console.log("less that 500");
;

