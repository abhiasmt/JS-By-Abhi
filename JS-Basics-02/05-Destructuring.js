//Destructuring in Array :->

let Arr =[1,2,3,4,5,6];
//Normal accessing an index from an array :->

console.log(Arr[0]);
console.log(Arr[1]);
console.log(Arr[2]);
console.log(Arr[3]);

//Accessing an index using destructuring method in JS: ->

let [a,b,c,d,e,f]=Arr;//First give an unique value ti each index

console.log(f);
console.log(e);

//We can swap two variables using this :->
//With out temp
let x=10,y=40;
[x,y]=[y,x];
console.log(x ,y);


///------------------------------------------------------------------------///

//Destructuring in Objects :->

//We can access any value of key from an Object without using "."(dot) operator

let obj={
    Assam: "3.78 CR",
    UP: "25.46 CR",
    Bihar: "9.45 CR"
};

let {Assam,UP,Bihar}=obj;//Key name should be same as object

console.log(Assam);//We don't need the obj name and "." operator to access



