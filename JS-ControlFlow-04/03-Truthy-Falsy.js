/*
🔹 What are Truthy & Falsy in JavaScript?

In JavaScript, every value is either “truthy” or “falsy” when used in a boolean context (like if, while, logical operators).

👉 JS automatically converts values to true or false using type coercion.


-Falsy values are :- 
    i. 0
    ii. -0
    iii. "" => Empty string
    iv. false
    v. 0n => BigInt zero
    vi. null
    vii. undefined
    viii. NaN



-Truthy values are : -
    i. true
    ii. 1 
    iii. -1
    iv. "0" => its a string value
    v. "false" => string value
    vi. " " =>  space is truthy
    vii. [] => Empty array is truthy
    viii. {} => Empty obj is truthy
    ix. function (){} => function is truthy 
    x. "Hello" => string is truthy

*/


//Example falsy:- 
if(0){
    console.log("Its true");
}else{
    console.log("Its false");
}
//etc.


//Example truthy:- 
if("false"){
    console.log("Its true");
}else{
    console.log("Its false");
}