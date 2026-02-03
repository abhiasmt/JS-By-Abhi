//using filter() on a array of object 


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
  },
  {
    name: "Effective Java",
    author: "Joshua Bloch",
    publicationDate: "2001-05-08",
    price: 600,
    lastPublication: "2018-12-27",
    publisher: "Addison-Wesley"
  },
  {
    name: "Computer Networks",
    author: "Andrew S. Tanenbaum",
    publicationDate: "1981-01-01",
    price: 550,
    lastPublication: "2021-06-14",
    publisher: "Pearson"
  },
  {
    name: "Operating System Concepts",
    author: "Abraham Silberschatz",
    publicationDate: "1982-01-01",
    price: 750,
    lastPublication: "2020-08-20",
    publisher: "Wiley"
  },
  {
    name: "Artificial Intelligence: A Modern Approach",
    author: "Stuart Russell",
    publicationDate: "1995-12-11",
    price: 900,
    lastPublication: "2021-04-01",
    publisher: "Pearson"
  },
  {
    name: "Database System Concepts",
    author: "Henry F. Korth",
    publicationDate: "1997-02-01",
    price: 680,
    lastPublication: "2019-07-25",
    publisher: "McGraw-Hill"
  },
  {
    name: "Head First Java",
    author: "Kathy Sierra",
    publicationDate: "2003-02-09",
    price: 480,
    lastPublication: "2022-01-10",
    publisher: "O'Reilly Media"
  }
];


let BookDetail = Books.filter((item)=>{//Here item is all the obj.
    return (item.price>500 && item.lastPublication>"2000-01-01");
});
console.log(BookDetail);


//-----In this way we can perform filter operation on a array of obj.



BookDetail = Books.filter((item)=>{
    return (item.price>500 && item.publisher==="Addison-Wesley")
});

console.log(BookDetail);

//-----In this way we can perform filter operation on a array of obj.
