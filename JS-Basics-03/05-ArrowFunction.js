//Normal function
function Add(x,y){
    return x+y;
}
console.log(`Add : ${Add(67,89)}`);


//------------------------------------------------------------------//



//Arrow function

// Mul=(a,b)=>{
//     return a*b;
// }
//Both are correct

const Mul=(a,b)=>{
    return a*b;//Explicit return 
}
console.log(`Mul : ${Mul(5,8)}`);

//Implicit return => Mostly used in React JS

const Div=(a,b)=> a/b;  // Or => const Div=(a,b)=> (a/b);
console.log(`Div : ${Div(8,2)}`);


//---------------------------------------------------------------//



//Return an object in the arrow function

const user =()=> ({name:"Parveen",age:20});
console.log(user());

