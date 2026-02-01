const prompt = require("readline-sync");

let day = prompt.questionInt("Enter the day No : ");

switch(day){
    case 1:
        console.log("It's Monday");
        break;
    case 2:
        console.log("It's Tuesday");
        break;
    case 3:
        console.log("It's Wednesday ");
        break;
    case 4:
        console.log("It's Thursday");
        break;
    case 5:
        console.log("It's Friday");
        break;
    case 6:
        console.log("It's Saturday");
        break;
    case 7:
        console.log("It's Sunday");
        break;
    default:
        console.log("It's Nothing Day");
        break;
}


/*

-If we don't use the "break" in any case then 
it will execute all the rest of case except the default one. 

case 1:
        console.log("It's Monday");
        break; => If we don't use this break then it will execute all the rest of case except the default one. 
    case 2:
        console.log("It's Tuesday");
        break;
*/