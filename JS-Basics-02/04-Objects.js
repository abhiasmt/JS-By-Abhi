const Std1={
    1: "Sourav",
    2: "Ram",
    3: "Rohan"
};

const Std2={
    4: "Abhi",
    5: "Swastika",
    6: "Rohit"
};

//Combine those Object into one :->

const AllStd=Object.assign(Std1,Std2);//Using assign() method
console.log(AllStd);

const AllStd1={...Std1,...Std2};//Spread method
console.log(AllStd1);


//Accessing keys of the Object :->

console.log(Object.keys(Std1)); //Print the keys of the Std1 obj in Array format

//Accessing values of the Object :->

console.log(Object.values(Std1)); //Print the values of the Std1 obj in Array format

//Declare an empty object and then enter keys and values :- 

const Clg={};

Clg.id="df87689";
Clg.branch={ //Entering an Object into another obj
    CSE: {
        HOD : "Suwar Sir",
        TotalStd : 30,
        BranchID : "CSE25-518",
    },
    EEE: {
        HOD : "Achaa Suwar Sir",
        TotalStd : 40,
        BranchID : "EEE25-237",
    },
    Civil: {
        HOD : "Suwar hi hain Sir",
        TotalStd : 60,
        BranchID : "Civil25-518",
    }
}

console.log(Clg);


