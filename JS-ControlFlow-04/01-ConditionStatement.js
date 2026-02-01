//Condition Statement - if...else
//If the condition is true the control enters the scope and perform only the code between the scope

if(true){// "true" as condition
    console.log("Example 1");
}

if(1){// "1" as condition
   console.log("Example 2"); 
}

//----------------------else----------------------//

let num = 10;
if(num>20){
    console.log("Num is grater then 20");
}else{
    console.log("Num is less then 20");
}

//-------------------else if-----------------------//



if(num>20){
    console.log("Num is grater then 20");
}else if(num<20 && num > 15){ // && operator => Both condition must be true
    console.log("Num is less then 20 and grater then 15");
}else{
    console.log("Num is less then 15");
}


//----------------------------------------------------------//

// Operator we used in the if-else condition----->

// >,>=,<,<=,==,=== (strictly equal => value + data type), !=,!==   etc.

// && => All the condition must be true 
// || (And) => At least one condition should true 