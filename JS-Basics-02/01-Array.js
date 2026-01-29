const Arr = [1,2,3,4,5,6,7,8,9,0];

console.log(`Array : ${Arr}`);//Print the whole Array
console.log(`Number at index 0 : ${Arr[0]}`);//Print element from a specific position

//Slicing :->

// console.log(`Array from 0th index to 5th index : ${Arr.slice(0,5)}`);

const copAr = Arr.slice(0,8);
console.log(`New Array from 0th index to 8th index : ${copAr}`);//Slicing print the Subarray from start index to end-1 (end index Excluded) index

console.log(`Original Array : ${Arr}`);
//Slicing those not change the actual value (Primitive in nature or Copy a duplicate value of the original)


//Splicing

/*

*splice => Changes the original array
*slice => Safe Copy

It use to manipulate an Array :->
    i. Delete a subarray from the original array (start to end(excluded) )
    ii. Add Elements using the parameters like => Arr.splice(StartIndx, 0 , Addable SubArray)
    iii. Replace Elements using parameters like => Arr.splice(StartIndx, EndIndx , Replaceable SubArray)
    iv. Negative Index Eg. :-> -2 => 2nd last element 
        ->Remove the 2nd last element from the array

It changes the original value of the array

*/

//i. Delete a subarray from the original array (start to end(excluded) )
const copAr2=Arr.splice(0,5);
console.log(`Array after splicing (0 to 5): ${copAr2}`);//Splicing print the Subarray from start index to end-1 (end index Excluded) index
console.log(`New SubArray : ${Arr}`);

//ii. Add Elements using the parameters like => Arr.splice(StartIndx, 0 , Addable SubArray)
const Arr2=[9,8,7,6,5,4];
Arr2.splice(3,0,1,2,3);
console.log(`New Array after adding Elements using Slice() : ${Arr2}`);


//iii. Replace Elements using parameters like => Arr.splice(StartIndx, EndIndx , Replaceable SubArray)
const Arr3=[12,23,34,45,56,67,78,90];
Arr3.splice(0,2, 1,2,3);
console.log(`New Array after Replacing Elements using Slice() : ${Arr3}`);


//iv. Negative Index Eg. :-> -2 => 2nd last element 
const Arr4=[90,87,65,54,43,32,21,];
Arr4.splice(-2,1);//remove the 2nd last element from the array
console.log(`New Array after using Negative Index using Slice() : ${Arr4}`);


console.log(`Array from string : ${Array.from("Hello World")}`);//Convert a string to Array 






