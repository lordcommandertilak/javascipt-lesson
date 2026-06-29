// var c = 300
let a = 200
if (true) {
    let a = 10
    const b = 20
    // console.log("Inner : ", a);
    
    // var c = 30 // it will be execute, 
    if (false) {
        
    }
}

// { } // These curlly braces is known as scope. Such as scope of object or loop or function


// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const uname = "Luffy"

    function two() {
        const website = "strawpirate.com"
        console.log(uname);
    }
    // console.log(website);

    two()
    
}
// one()

if (true) {
    const uname = "Fuse"
    if (uname === "Fuse") {
        const member = "Apex Legend"
        // console.log(uname + member);
        
    }
    // console.log(member);// it will show error as it is accessing the varible outside of scope
    
}

// console.log(uname);// it will show error as it is accessing the varible outside of scope

//+++++++++++++++++++++++++++ interesting ++++++++++++

console.log(addOne(2));
function addOne(num){
    return num + 1
}

// console.log(addOne(2));
addTwo(34)
const addTwo = function num(num) {
    return num + 2
}

// console.log(addTwo(20));
