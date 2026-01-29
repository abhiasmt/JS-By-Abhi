// The prompt() fun is only workable in the browser but not in the Node JS 
//  -> Because it runs outside the browser 
//  -> In Node JS we use readline 

// For browser only :->

// let size = prompt("Enter the size of array : ");
// let  Arr = new Array();

// for(i=0;i<size;i++){
//     Arr[i]=prompt(`Enter the element no. ${i+1} :`);
// }

// let search=prompt("Enter the searchable element : ");
// let mid=0;
// let st=0;
// let end=size;

// for(i=st;i<end;i++){
//     mid=size/2;
//     if(Arr[mid]==search){
//         console.log(`Element found at index : ${mid}`);
//     }

//     else if(Arr[mid]<search){
//         st=mid+1;
//     }
//     else if(Arr[mid]>search){
//         end=mid-1;
//     }else{
//         console.log("Element not found !");
        
//     }
// }


//------------For Node JS---------------//
//----------Using readline ----------//

const prompt=require("readline-sync");

let size = prompt.questionInt("Enter the size of array : ");
let  Arr = new Array();

for(i=0;i<size;i++){
    Arr[i]=prompt.questionInt(`Enter the element no. ${i+1} :`);
}

let search=prompt.questionInt("Enter the searchable element : ");
let mid=0;
let st=0;
let end=size;
let found=false;

for(i=st;i<end;i++){
    mid=size/2;
    if(Arr[mid]==search){
        found=true;
        break;
    }

    else if(Arr[mid]<search){
        st=mid+1;
    }
    else if(Arr[mid]>search){
        end=mid-1;
    }
}
 if(found==true){
        console.log(`Element found at index : ${mid+1}`);
    }
    else{
        console.log("Element not found !");
    }
    