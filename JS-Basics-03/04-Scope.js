/* 🔹What is Scope in JavaScript?
    -Scope decides where a variable can be accessed in your code.

    🔹There are 3 types of scope in JavaScript:
        1. Global Scope
        2. Function Scope
        3. Block Scope
        4. Lexical Scope
        5. Note on 'var' Keyword

        🔹1 : Global Scope :
            -Variables declared outside of any function or block have global scope.
            -They can be accessed from anywhere in the code.
            Example :->
 */
let globalVar = "I am a global variable";
function showGlobalVar() {
    console.log(globalVar); // Accessible here
}
showGlobalVar();
console.log(globalVar); // Accessible here too




//-------------------------------------------------------------------------------------//




/*
        🔹2 : Function Scope :
            -Variables declared within a function are in the function scope.
            -They can only be accessed within that function.
            Example :->
*/
function functionScopeExample() {
    let functionVar = "I am a function-scoped variable";
    console.log(functionVar); // Accessible here
}
functionScopeExample();
// console.log(functionVar); // Unaccessible here, will throw an error




//-------------------------------------------------------------------------------------//




/*
        🔹3 : Block Scope :
            -Variables declared with let or const inside a block (e.g., within { }) have block scope.
            **-Variables declared with var do not have block scope; they are function-scoped.
            -They can only be accessed within that block.
            Example :->
*/
if (true) {
    let blockVar = "I am a block-scoped variable";
    console.log(blockVar); // Accessible here
}
// console.log(blockVar); // Unaccessible here, will throw an error




//-------------------------------------------------------------------------------------//



/*
        🔹4 Lexical Scope:
            -Lexical scope means that inner functions have access to variables defined in their outer enclosing functions.
            Example :->
*/
function outerFunction() {
    let outerVar = "I am from outer function";
    function innerFunction() {
        console.log(outerVar); // Accessible here
    }
    innerFunction();// Call inner function
}
outerFunction();
// innerFunction(); // Unaccessible here, will throw an error



//-------------------------------------------------------------------------------------//



/*
        🔹5 Note on 'var' Keyword:
            -Variables declared with var do not have block scope; they are function-scoped.
            -If you declare a variable with var inside a block, it can still be accessed outside that block.
            Example :->
*/
if (true) {
    var varVariable = "I am declared with var";
    console.log(varVariable); // Accessible here
}
console.log(varVariable); // Accessible here too, because var is function-scoped




//-------------------------------------------------------------------------------------//




/*



    🔹Summary
        - Global Scope: Variables accessible anywhere in the code.
        - Function Scope: Variables accessible only within a function.
        - Block Scope: Variables accessible only within a block (e.g., inside { }).
    - Use let and const for block-scoped variables to avoid unintended access.
*/
