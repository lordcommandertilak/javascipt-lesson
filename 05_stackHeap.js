// Stack, Heap ------> type of memory

// Stack (Primitive), Heap (Non-Primitive)

let myName = "Luffy" 
let anotherName = myName
anotherName = "Zoro"

console.log(myName);
console.log(anotherName);

let user = {
    email: "luffy@mail.com",
    upi: "luffy@ybl"
}

let user2 = user
user2.email = "Zoro@mail.com"

console.log(user.email);
console.log(user2.email);

