//For loop 

//Print 0-10 No. :-

console.log("Incremental for loop");
for (let i = 0; i <=10; i++) {// Incremental for loop
    console.log(i);
}

//Print 10-0 No. :-
console.log("Decremental for loop");
for(let i=10;i>=0;i--){ //Decremental for loop
    console.log(i);
    
}

//if-else inside loop

for(let i=0;i<=10;i++){
    if(i==2){
        console.log("It's a Two");
    }
    console.log(i);// First print till 0 and 2 then control goes to if statement than it print to 2-10 
}

console.log("Table from 1-10");
for(let i=1;i<=10;i++){
    console.log(`Table of ${i}`);
    for(let j=1;j<=10;j++){
        console.log(i +" X "+ j+" = "+ i*j);
    }
}


//Use of break and continue keyword :-


console.log("Break Keyword");
for(let i=0;i<10;i++){
    if(i==5){
        console.log("5 is detected");
        break; // Exit from the loop 
    }
    console.log(i);
}

console.log("Continue keyword");
for(let i=0;i<=10;i++){
    if(i==5){
        console.log("5 is detected");
        continue; // Skip the 5 and continue from the next iteration 
    }
    console.log(i);
}