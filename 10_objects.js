// Singleton 
// Object.create
// object literals

const mySymb = Symbol('Key1')

const jsUser = {
    name: "Luffy",
    "fullname": "Monkey D Luffy",
    [mySymb] : "myKey1",
    age: 21,
    location: "east-blue",
    email: "luffy@pirate.jp",
    isLoggedIn: false,
    lastLoginDay: ["Sunday", "Friday"]
}

console.log(jsUser.name);
// console.log(jsUser[email]);// email value is in string therefor "email"

// console.log(jsUser.fullname);// it cannot access fullname as it is "" in the Object. Only way to access is ["fullname"]

console.log(jsUser["email"]);
console.log(jsUser[mySymb]);


jsUser.email = "monkeyDluffy@pirate.jp"
// Object.freeze(jsUser)
// jsUser.email = "monkeyD@pirate.jp"

// console.log(jsUser);


jsUser.greeting = function() {
    console.log("Hello Js User");
}

jsUser.greeting2 = function() {
    console.log(`Hello Js User, ${this.fullname}`)
}


console.log(jsUser.greeting());
console.log(jsUser.greeting2());
