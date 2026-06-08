//Singleton

// const tinderUser = new Object() // Singleton Object
const tinderUser = {} // Non-Singleton Object

tinderUser.id = "123abv"
tinderUser.name = "Sanji"
tinderUser.isLoggedIN = false

// console.log(tinderUser);

const regularUser = {
    email: "sanji@pirate.jp",
    fullname: {
        userFullname:{
            firstName: "Sanji",
            lastnam: "Vinsmoke"
        }
    }
}
// console.log(regularUser.fullname.userFullname.firstName);
// console.log(regularUser["fullname"]);

const obj1 = {1: "a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj4 = {5:"c", 6:"d"}


// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}

console.log(obj3);

const arr = [
    {
        name:"asasd",
        id: 1
    },
    {
        name:"asdas",
        id: 2
    },
    {
        name:"dfdfd",
        id: 5
    }
]

arr[1].name
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('name'));

