const num1=1000000;
const num2=68.6978;

console.log(num1.toFixed(2));//Used to add "0 or 0's" after an number
console.log(num1.toLocaleString());//To add "," like -> 1,00,00,000
console.log(num1.toString());//Convert to string

console.log(num2.toPrecision(3));//68.6978=>68.7
console.log(num2.toPrecision(2));//68.6978=>69


console.log(num1.toExponential());//Convert to exponential



//--------------------Maths-------------------------//

const no=123.987;
// const ar=[10,46,35,59,34,9];

console.log(Math.floor(no));//Give the floor value -> 123.987=>123
console.log(Math.ceil(no));//Give the ceil value -> 123.987=>124

console.log(Math.max(23,56,34,85,9,35,64));//Return the Max value from the given value
console.log(Math.min(23,56,34,85,9,35,64));//Return the Min value from the given value

console.log(Math.round(no));//Return the round of no of the given no
console.log(Math.abs(-245));//Return the positive absolute no. -> -245=>245 || 45 => 45
 
//-------------------Random()-------------------//

/*
In random() it gives the random no. between 0 to 1 each time
*/

console.log(Math.random());//Return a random value 0-1











