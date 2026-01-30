/*
Objects:->
- Objects are collections of key-value pairs.
- Keys are strings (or Symbols) that identify properties.
- Values can be of any data type, including other objects or functions.
- Objects are mutable, meaning their properties can be changed after creation.
- Objects are created using curly braces {} or the Object() constructor.
- Properties can be accessed using dot notation (obj.key) or bracket notation (obj["key"]).


*Example:->
*/

//Objects created using curly braces : ->

const Student={
    name:"Abhi",
    roll: 518,
    branch:"CSE",
    age: 20
};

console.log(Student);//Display the complete Object


console.log(`Student name : ${Student.name}`);//Display a particular key-value using "obj.key" method
console.log(`Student Roll : ${Student["roll"]}`);//Display a particular key-value using "obj["key"]" method

// console.log(`Student Roll : ${Student[roll]}`);//If we write the key without using any quotation or " " => It will give an syntax error



function Display(){// Using a Function
    console.log(`Branch : ${Student.branch}`);
}
Display();


//-----------Object using Constructor---------------//

function Std(name1,age1){//Creating a Constructor function using parameter
    this.name=name1;
    this.age=age1;
}

const obj = new Std("Abhi",20);

console.log(obj.name);

//---Object using Constructor is used to reuse the same code multiple time---//

//-Why use Constructor Function? : ->
/*

=>Without constructor:->

let s1 = { name: "Abhi", age: 19 }; 
let s2 = { name: "Rahul", age: 20 }; 


=> With constructor:->

let s1 = new Student("Abhi", 19);
let s2 = new Student("Rahul", 20);


*/
