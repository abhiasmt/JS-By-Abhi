/*
What is map()?

-map() is used to create a NEW array by applying a function to each element of an existing array.
-It does not change the original array.

*/

//Eg:-

const Ar=[1,2,3,4,5,6,7,8,9];

//Multiply all the val of arr with 5 
let Mul=Ar.map((item)=>{
    return item*5;
});
console.log(Mul);


// It is use to perform any operation with the array and return the value 


//Eg of Array of obj:-


const Books = [
  {
    name: "Clean Code",
    author: "Robert C. Martin",
    publicationDate: "2008-08-01",
    price: 450,
    lastPublication: "2017-09-15",
    publisher: "Prentice Hall"
  },
  {
    name: "Introduction to Algorithms",
    author: "Thomas H. Cormen",
    publicationDate: "1990-09-01",
    price: 850,
    lastPublication: "2022-04-10",
    publisher: "MIT Press"
  },
  {
    name: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    publicationDate: "1999-10-20",
    price: 500,
    lastPublication: "2019-09-13",
    publisher: "Addison-Wesley"
  },
  {
    name: "You Don’t Know JS",
    author: "Kyle Simpson",
    publicationDate: "2014-12-28",
    price: 350,
    lastPublication: "2020-01-02",
    publisher: "O'Reilly Media"
  },
  {
    name: "Java: The Complete Reference",
    author: "Herbert Schildt",
    publicationDate: "1996-05-01",
    price: 700,
    lastPublication: "2021-03-18",
    publisher: "McGraw-Hill"
  },
  {
    name: "Design Patterns",
    author: "Erich Gamma",
    publicationDate: "1994-10-31",
    price: 650,
    lastPublication: "2016-11-05",
    publisher: "Addison-Wesley"
  }
];


//Returning (in the form of Array ) Single element of the obj:- 
let BookDetail=Books.map((book)=>{
    return book.author;
});
console.log(BookDetail);

//We can also return value as a obj:-

BookDetail=Books.map((book)=>{
    return ({
        name: book.name, 
        price: book.price,
    });
});
console.log(BookDetail);

//Same :---> (Using Implicit return )

// const nameAndAuthor = Books.map(book => ({
//   name: book.name,
//   author: book.author
// }));

// console.log(nameAndAuthor);


//Eg. of increasing price by 10% using map() method:-

const increasedPrice=Books.map((book)=>{
    return (book.price + (book.price*0.10));
});

console.log(`Increased Price : ${increasedPrice}`);
