//For-of loop is used to access the value of array, string and map
//Why we use it => It does not require any initialization or increment
//We can't use for-of loop to traverse an object


//For of Loop in Array :- 
let Arr=[32,34,56,67,38,57,89,67];

for (const i of Arr) {
    console.log(i);
}


//For of Loop in String:-
let str ="Hello Im Abhi Who Are you!";

for (const i of str) {
    console.log(`Character of the string : ${i}`);
}//Spaces will also printed


//Except the Spaces
for (const i of str) {
    if(i==" "){
        continue;
    }
    console.log(`Character of the string : ${i}`);
}//Spaces will also printed


//For of Loop in map:-

//Print the map in the form of Array :-
const map = new Map();

map.set('js','JavaScript');
map.set('py','Python');
map.set('cpp','C++');
map.set('Rb','Ruby');

for (const element of map) {
    console.log(element);
}

//****IMPORTANT*****/
//Destructuring of array and print the in key-value pair:-
//We Destructure the array in for-of loop -> [key,value] 

for (const [key,value] of map) {
    console.log(`${key} :- ${value}`);
}

/*
Output:- 
    js :- JavaScript
    py :- Python
    cpp :- C++
    Rb :- Ruby
 */

