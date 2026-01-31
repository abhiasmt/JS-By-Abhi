//Rest Operator in Functions
//We pass multiple arguments to a function using the rest operator (...).
//In the function definition, the rest operator is used before the last parameter name.
//We use "..." followed by the parameter name.
// The rest operator allows a function to accept an indefinite number of arguments as an array.

function Num(...numbers){//numbers is an array of all arguments passed
    console.log("Numbers Array: ", numbers);//Numbers are stored in an array
}

function Sum(...args){//args is an array of all arguments passed
    let total = 0;
    for(let num of args){
        total += num;
    }
    return total;
}
let sumResult = Sum(1,2,3,4,5,6,7,8,9,10);//Passing multiple arguments
console.log(`Sum is: ${sumResult}`);

//You can pass any number of arguments to the Sum function
//Example with mixed number of arguments
console.log(`Sum is: ${Sum(10,20)}`);
console.log(`Sum is: ${Sum(5,15,25,35)}`);
console.log(`Sum is: ${Sum()}`); //No arguments passed