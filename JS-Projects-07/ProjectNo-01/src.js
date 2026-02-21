const body=document.querySelector("#body");
const button=document.querySelectorAll(".button");
const resetBtn=document.querySelector(".ResetBtn");


button.forEach(function(btn){
    btn.addEventListener("click",function(event){
        if(event.target.id==="red"){
            body.style.backgroundColor=event.target.id;
        }
        if(event.target.id==="white"){
            body.style.backgroundColor=event.target.id;
        }
        if(event.target.id==="gray"){
            body.style.backgroundColor=event.target.id;
        }
        if(event.target.id==="blue"){
            body.style.backgroundColor=event.target.id;
        }
        
        
    })
    resetBtn.addEventListener("click",function(e){
        if(e.target.id==="resetBtn"){
            body.style.backgroundColor="black";
        }
    })
    
})





