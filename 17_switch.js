// Switch ----------------------
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
/// Switch is case sensitive
const month = 3 

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;

    default:
        console.log("Default case match");
        break;
} /// if "break" is missing in any "case" than it will execute all the code except the default

const superHero = "Spider Man"

switch (superHero) {
    case "Super Man":
        console.log("Super Man");
        break;
    case "Spider Man":
        console.log("Spider Man");
        break;

    default:
        break;
}