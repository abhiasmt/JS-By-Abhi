const accNo = 123456789 //Constant variable 
let accName = "Abhi Das" //using let
//------------------------//
var acEmail = "278964190" //using var
//Variables declared with var do not have block scope; they are function-scoped.
//var is not used in real world project because of scope "{}" problem:-
//If I declare a variable inside a scope it should't accessible outside the scope 
//But If I declare a variable inside a scope using var it can accessible outside the scope 
//More about this in -> JS-Basics-03 => 04-Scope.js

console.log(accNo)//print the line 
console.table(["accNo = "+accNo,"accNAMe = "+accName,acEmail])//print as a table 