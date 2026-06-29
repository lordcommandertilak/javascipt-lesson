// If Statement

// if(condition) { // condition needs to be true to go inside the scope

// }

const isUserLogged = true

if (isUserLogged) {
    
}

//Comparision operators
// <, >, <=,>=, ==, !=, ===, !==

// 2<3 true
// 2>3 false
// 2==="2" false // it checks the type of data

const temperature = 21

// if (temperature<30) {
//     console.log("less than 30");
    
// } else{
//     console.log("Temperature is greater than 30");
    
// }

const score = 200

if (score > 100) {
    const power = "Fly"
    // console.log(`User power: ${power}`);
    
}
    // console.log(`User power: ${power}`);// it cannot be executed, as it is outside of scope

// Short-Hand Notation --------------------------
const balance = 569

// if (balance> 500) console.log("Test"), console.log("asd");/// not a good practice

// Nesting ---------------------------------
// if (balance < 500) {
//     console.log("less than 500");
    
// } else if (balance < 600) {
//     console.log("less than 600");
    
// } else if (balance < 750){
//     console.log("less than 750");

// } else {
//     console.log("Greater than 750");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

// Logical Operator --------------------------
// &&, "and" all the condition needs to true
if (userLoggedIn && debitCard && 2==3) {
    console.log("Allowed to make purchase");
    
}
// || "or" any one condition needs be true
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
    
}