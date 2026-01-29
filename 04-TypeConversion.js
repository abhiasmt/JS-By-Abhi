let Num = 108;
let Str = "108";
let Bool = true;
let Float = 123.89;

//---------------------//

let numAsStr = String(Num);//Type conversion => Number to -> String
console.log(typeof(numAsStr));
console.log(numAsStr);

let strAsNum = Number(Str);//Type conversion => String to -> Num
console.log(typeof(strAsNum));
console.log(strAsNum);

//-------------------**Notes**------------------------//
/*

* In Boolean -> 
    1 => true
    0 => false

* If a Str variable -> 
    let str = "108abc"
        ->After converting it to Number its type will be => NaN (Not a Number)
            ->Because it has "abc" a Str after the "108"


*/

let Str1 = "108abc";
let strAsNum1 = Number(Str1);//Type conversion => String to -> Num
console.log(typeof(strAsNum1));
console.log(strAsNum1);//Output => NaN

