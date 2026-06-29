const user = {
    uname: "Luffy",
    price: 100000,

    welcomeMssg: function () {
        console.log(`${this.uname} welcome to the website`);
        console.log(this);
        
    }

}

// user.welcomeMssg()

// user.uname = "Zoro"
// user.welcomeMssg()

// console.log(this);

function pirate() {
    let name = "Nami"
    console.log(this.name);
    
}
// pirate()

const legend = () => {
    let name = "Mirage"
    console.log(this);
}
// legend() 

// const addTwo = (num1, num2) => {
//     return num1 + num2
// } /// when curlly braceses are used retunr keyword is needed// explicit

// const addTwo = (num1, num2) =>  num1 + num2 //inplicit

// const addTwo = (num1, num2) =>  (num1 + num2) // when parantesis is used no return keyword is need

const addTwo = (num1, num2) =>  ({uname:"luffy"}) // when retuning an object parentesis is needed "()"
console.log(addTwo(80, 12));

const myArry = [2, 3, 4, 5]

// myArry.forEach()