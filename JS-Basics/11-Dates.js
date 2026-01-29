const myDate = new Date();//Date is an object type variable 

console.log(`JS Standard way to print Date : ${myDate}`);//JS Standard way to print Date
console.log(`Convert to String : ${myDate.toString()}`);//Convert to String | Output=> "Thu Jan 29 2026 14:54:37 GMT+0530 (India Standard Time)"
console.log(`Date : ${myDate.getDate()}`);//Print only the Date
console.log(`Month : ${myDate.getMonth()+1}`);//Month start from "0" so we add "1"
console.log(`Year : ${myDate.getFullYear()}`);//Print the year
console.log(`Time : ${myDate.getHours()} : ${myDate.getMinutes()} : ${myDate.getSeconds()}`);//Print Time
console.log(`Complete Date : ${myDate.toLocaleDateString()}`);//Print Date in the form of (DD/MM/YYYY) =>IST







