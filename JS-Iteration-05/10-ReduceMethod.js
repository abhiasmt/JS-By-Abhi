//Reduce Method in JavaScript
/**
    * The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
    * The reducer function takes four arguments:
    * Accumulator
    * Current Value
    * Current Index
    * Source Array
    * Syntax:
    * array.reduce(function(accumulator, currentValue, currentIndex, array) {
    * // Your code here
    * }, initialValue);
    * Parameters:
    * function: A function to execute on each element in the array (except for the first element if no initialValue is provided).
    * initialValue (Optional): A value to use as the first argument to the first call of the callback. If no initialValue is supplied, the first element in the array will be used and skipped.
    * Return Value:
    * The single value that results from the reduction.
    * Example:

*/
//Mainly it is use to sum or multiply the all the val of arr and return single val.
//Real Life Example:- Shopping Cart Total Price Calculation


//Eg:- With each iteration value:-
const Price=[999,799,789,459,349,439,359];
let initialValue =0;
let TotalPrice= Price.reduce((accumulator,currentValue)=>{
    console.log(`Acc val : ${accumulator} and Curr val : ${currentValue}`);
    return accumulator+currentValue;
},initialValue);

console.log(`Total Price : ${TotalPrice}`);

//Output:-
/*
Acc val : 0 and Curr val : 999
Acc val : 999 and Curr val : 799
Acc val : 1798 and Curr val : 789
Acc val : 2587 and Curr val : 459
Acc val : 3046 and Curr val : 349
Acc val : 3395 and Curr val : 439
Acc val : 3834 and Curr val : 359

Total Price : 4193
*/


