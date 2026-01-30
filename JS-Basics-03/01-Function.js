//A function is a block of code designed to perform a particular task.
// It is executed when "something" invokes or calls it.
// Functions are one of the fundamental building blocks in JavaScript.
// A function is defined with the function keyword, followed by a name,
// followed by parentheses ().
// Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).
// The parentheses may include parameter names separated by commas:

function MyName(){//Definition of function 
    console.log("My Name is Abhi");
}

MyName();//Function Call or Invoke

//Function with parameter
function Add(a , b){//a and b are parameters
    console.log("The Sum is: ", a + b);
} 
Add(5,10);//5 and 10 are arguments

//Function with return type
function Mul(x,y){
    return x*y;
}

let result = Mul(5,6);
console.log(`Result : ${result}`);
