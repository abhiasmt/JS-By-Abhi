//Calculate the total price from an Array of obj.

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


const TotalPrice = Books.reduce((acc,book)=>{
    return acc + book.price;
},0);
console.log(TotalPrice);
