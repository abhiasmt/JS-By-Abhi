//While and Do-While loop


//Print from 0-10

let num =0;//Initialization
while(num<=10){ //Condition
    console.log(num);
    num++;//Increment Or Decrement
}


//While loop in array 

let Arr = [12,34,56,67,87,56,43,23,67,35];

let index = 0;//Initialization

while(index<Arr.length){   //Condition
    console.log(`At index ${index} value : ${Arr[index]}`);
    index++;  //Increment
}



//--------------------------Do-While Loop------------------------------//



let i=0;//Initialization
do{
    console.log(i);
    i++;//Increment
}while (i<=10); //Condition


//Why we need Do-While:- 
//In Do-While loop it always Run at least one time whether the condition satisfy or not

//Example:-

let no=80;

do{
    console.log(no);
    no++;
}while(no<=10);// Here no = 80 that is less than 10 so condition not satisfy still it will print the "no" one time