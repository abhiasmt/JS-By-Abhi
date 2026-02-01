//Nullish Coalescing Operator :- 

/**
🔹 What is the Nullish Coalescing Operator (??)?

?? returns the right-hand value ONLY if the left-hand value is null or undefined.
👉 It does NOT treat 0, "", or false as missing.

-value ?? defaultValue

- Logical OR "||" Also act like same but -
    - || treats all falsy values as missing

    So-
        let score = 0;

        let result = score || 100;
        console.log(result); // 100 (wrong)
    
    We wanted 0, but JS replaced it.



*/

//Eg:- 
let score = 0;

let result = score ?? 100;
console.log(result); // Output=> 0 -> Because score is not null



/*
**Important =====>>>>

null ?? "default"        // "default"
undefined ?? "default"   // "default"

0 ?? 10                 // 0
"" ?? "text"            // ""
false ?? true           // false



What value trigger ?? :-
-null
-undefined


 */




//---------------------------------------------------------//

//Turnery Operator =>

/**
🔹 What is the Ternary Operator?

The ternary operator is a short-hand for if...else.

Syntax =>

    condition ? expressionIfTrue : expressionIfFalse;


 */
//Eg :-

//If we use if-else statement

let age = 20;
let res;

if (age >= 18) {
  res = "Adult";
} else {
  res = "Minor";
}
console.log(res); // Output: Adult


//In ternary operator:-
age>18 ? console.log("Adult") : console.log("Minor");


