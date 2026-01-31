//Passing an Object as argument in a function


//1st method:->

//Declare an Object 

let Product={
    name: "EarPod Dolby",
    price: 1999
};

function Display(obj){//Take a parameter
    console.log(`Product name : ${obj.name} and price : ${obj.price}`);
}

Display(Product);//Call the function and pass the obj "Product" as arguments


//2nd method :->
//Directly pass the complete definition of the object as the argument :->

function Show(obj){
    console.log(`Name : ${obj.name} and Roll : ${obj.roll}`);
}

Show(                           //Directly pass the complete definition of the object as the argument
    Student={
        name: "Parveen",
        roll: 91
    }
);


//---------------------------------------------------------------------------------//

//Passing array as argument :->
//1st method

let name=["Parveen","Swastika","Raj"];

function ArrayDisplay(arr){
    console.log(arr);
    return arr[1];
}
console.log(ArrayDisplay(name));


//2nd Method :->

function ArrayShow(arr){
    console.log(arr);
}

ArrayDisplay([20,30,40,50,60,70,80,90]);//Directly pass the complete definition of the array as the argument 