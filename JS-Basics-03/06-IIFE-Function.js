/*
An IIFE is a JavaScript function that runs immediately after it is defined.

-IIFE is a function that executes immediately after creation and helps avoid polluting the global scope.

We write the IIFE function definition or body in the parenthesis "( )" 
and immediately after we write another parenthesis "( )" to execution call and the semicolon ";" explicitly .

💠Why do we need IIFE?
    1️⃣ Avoid Global Scope Pollution :- Variables inside an IIFE do not leak into global scope.
    2️⃣ Data Privacy (Encapsulation) :- IIFE helps create private variables.

*/

//Example IIFE function with Name:-

(function User(){
    console.log("Hello user 1!");
}) ();


//Example IIFE function without Name:-
(function (){
    console.log("Hello user 2!");
})();

//Example IIFE function with Name and parameters:-

(function Add(a,b){
    console.log(`Add = ${a+b}`);
})(3,6);//Passing Arg here

//Example IIFE function without Name and parameters:-
(function (x,y){
    console.log(`Mul = ${x*y}`);
})(4,8);//Passing Arg here


//-----------------------------Arrow IIFE Function-----------------------------------------//
//Example without parameter : -

(()=>{
    console.log("Hello Bro");
})();

//Example with parameter : -
((a,b)=>{
    console.log(`Div = ${a/b}`);
})(12,4);//Passing Arg here





//---------------------------------Why do we need IIFE?--------------------------------------------------------//





//1️⃣ Avoid Global Scope Pollution :-



(function Mul() {
    let x=10;
    console.log(x);
})();

// console.log(x);//Error => x is not defined

