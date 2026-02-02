//For-in loop is used to access the key of array and Object 
//Why we use it => It does not require any initialization or increment
//It can't Iterate map

let Arr=[12,32,43,45,65,67,78,56,78,56,98,45];

for (const key in Arr) {
   console.log(key);//It only print the key not the value
}

//To print the value using for-in loop of a array:-
for (const i in Arr) {
    console.log(Arr[i]);//It will print the value of array
}



//-------------------------------------------------------------------------------//



let myObj={
    cpp:"C++",
    py:"Python",
    js:"JavaScript",
    rb:"Ruby"
};

for (const key in myObj) {
    console.log(`${key} :- ${myObj[key]}`);// myObj[key] will print the value of array
}