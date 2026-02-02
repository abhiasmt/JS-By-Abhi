/*

$ What is forEach() in JS?
-forEach() is an array method used to iterate over each element of an array and perform an action.


Syntax:-

array.forEach(function(currentValue, index, array) {
  // code to execute
});

Parameters =>

    -currentValue → current element

    -index (optional) → index of current  element

    -array (optional) → the whole array


-Function are used without name
-Arrow function are also used here


We can't use :-
    -break;
    -continue;
    -return value;


*/


//Example:- 

let arr=[12,23,34,45,56,67,78,89,90];

// Normal Function without name:-
console.log("Normal Fun:-");
arr.forEach(function (num){
    console.log(num);
})

// Arrow Function :-
console.log("Arrow Fun:-");
arr.forEach((num)=>{
    console.log(num);
})


//Passing a function as parameter 
function increment(){ //Empty function
}

console.log("Passing a function as parameter ");
arr.forEach((increment)=>{ //Only passing the reference of the function (or function name) not the initialization ( or the () )
    console.log(increment);
})


console.log("Passing a function as parameter 2nd Method : ");
function num(item){
    console.log(item);
}

arr.forEach(num); //Only passing the reference of the function (or function name) not the initialization ( or the () )


//----------------------------------------------------------------//

console.log("Printing Index and Value using For-Each Method : ");
arr.forEach(function (value, index){
    console.log(`${index} => ${value}`);
})


