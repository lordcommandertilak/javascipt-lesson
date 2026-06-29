function sayName() {
    console.log("L");
    console.log("F");
    console.log("F");
    console.log("Y");
    
}
// sayName()

// function addNum(num1, num2){
//     console.log(num1 + num2)
// }
function addNum(num1, num2){
    // let result = num1 + num2
    // return result
    return num1+num2
}
const result = addNum(10, 24)

// console.log("Result: ", result);

function loginUser(uname="sam") {
    if (!uname) {
        console.log("Please Enter User Name!!");
        return
    }
    else{
        return `${uname} just logged in`
    }
}

// console.log(loginUser("Zoro"));
// console.log(loginUser("Luffy")); // if no value is passed it would be undefined 

/// ""..."" (three dot) also know as spread operator and also rest operator
function calculateCart(val1, val2, ...num1) {
    return num1
}

// console.log(calculateCart(3, 12, 34, 54));

const user = {
    name: "Luffy",
    email: "luffy@mail.com"
}

function handleObject(anyobj) {
    //console.log(`Username is ${anyobj.name} and Emial ID is ${anyobj.email}`);
    
}
// handleObject(user)
handleObject({
    name:"Zoro",
    email:"Zoro@mail.com"
})

const myArry = [200, 300, 2123, 600]

function retunrArry(getarry) {
    return getarry[2]
}

// console.log(retunrArry(myArry));
console.log(retunrArry([200, 300, 500, 600]));

