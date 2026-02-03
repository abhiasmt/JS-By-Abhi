//Accessing an object from an Array || Accessing object inside an Array
//Using forEach() method

let Arr=[
    {
        LangName : "Java",
        Extension : "java"
    },
    {
        LangName : "JavaScript",
        Extension : "js"
    },
    {
        LangName : "Python",
        Extension : "py"
    }
    
];

//Here we use forEach() method -
//Here each obj of the array is an item for the array -
Arr.forEach((item)=>{
    console.log(`Language name : ${item.LangName} and Extension : ${item.Extension}`);
})