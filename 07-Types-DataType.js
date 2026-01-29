/*

*Types of Data Type ->
    1) Primitive (Call by value) : 
        i. String
        ii. Number (Int and Float)
        iii. Boolean
        iv. Null
        v. Undefined
        vi. Symbol
        vii. BigInt (For very large Number)
    
    2) Non Primitive (Call by reference) : 
        i. Array
        ii. Object
        iii. Function

*/

// Array

let Arr=[];
let Arr2=[1,2,3,4,6];

//Object using Literal
let obj={
    name: "Abhi",
    age : 20,
    roll : 518
};

console.log(obj);

//Object using "new Object()"

let obj1 = new Object();

obj1.name="Abhi";
obj1.roll=518;
obj1.age=20;

console.log(obj1);


//Function 
function add(){
    console.log(45+35);
}
// console.log(add());
add();//Call the function
