//filter() method is same as forEach() method but it can return any value that the forEach() can't.
//For this advantage we use filter() method 


let Arr=[1,2,3,4,5,6,7,8,9,0];
//Eg :-
/*


const greaterThan5 = Arr.forEach((item)=>{
    if(item>5){
        return item;
    }
})
console.log(greaterThan5);//Output => Undefined 
//Not giving the required output


-To overcome from this we use filter() method:--- 
*/


const greaterThan5 = Arr.filter((item)=>{
    return (item>5);
})
console.log(greaterThan5); //Output=> [ 6, 7, 8, 9 ]


//--------------------***Important***-----------------//

//We can use forEach() method for the same using some efforts or extra line of code

newArr=[];// Declare an empty array
Arr.forEach((item)=>{
    if(item>5){
        newArr.push(item);
    }
});

console.log(newArr);// We can't return here but we can perform the same task with different approach
//      -Disadvantage :- It require extra space (space complexity higher) and effort



