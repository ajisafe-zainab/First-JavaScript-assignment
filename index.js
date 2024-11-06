const library = [];
//List of books object
let bookOne = {
    title:'The Great Gatsby',
    author:'F.Scott Fitzgerald',
    yearPublished:1925,
    availability:true
}
let bookTwo= {
    title:'To kill a Mockingbird',
    author:'Harper Lee',
    yearPublished:1960,
    availability:true
}
let bookThree = {
    title:'1984',
    author:'George Orwell',
    yearPublished:1949,
    availability:false,
}
let bookFour = {
    title:'Pride and Prejudice',
    author:'Jane Austen',
    yearPublished:1813,
    availability:true,
}
//Addition of books to the library using push method.
library.push(bookOne);
library.push(bookTwo);
library.push(bookThree);
library.push(bookFour);
console.log(library);

//Updating the availability of 1984 to true.
bookThree.availability = true;
console.log(library);

//Removal of a book from the library using splice method
library.splice(3,1);
console.log(library);

//To check if a book is in library
for( let i=0 ;i < library.length,i++;){
    if(library[i].title.includes('The Great Gatsby')){
        console.log('This is included')
    }
}
//Book borrowing
console.log(library);
bookOne.availability = false;
console.log(library);
library.shift();
console.log(library);

//Adding a new book
let bookFive = {
    title:'The Catcher in the Rye',
    author:'J.D Salinger',
    yearPublished:1951,
    availability:true,
}
library.push(bookFive);
console.log(library);

//Book Title Extraction
const titles = library.map((book)=>book.title);
console.log(titles);
console.log(titles.join(" ,"));

//Creating New Library Section
const newarrivals = library.slice(1,3);
console.log(newarrivals);