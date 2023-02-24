function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

 function getBooksBorrowedCount(books) {
  //create a var to store a result array
  let borrowedBooks = [];
  //iterate through books array
  books.forEach(book => {
  //access book.borrows array
    const checkoutHistory = book.borrows;
  //check if there is any element with returned:false status, if there is add book to the result array
   if (checkoutHistory.some(checkout =>
        !checkout.returned))
        borrowedBooks.push(book); 
    })
    return borrowedBooks.length;
  }

function getMostCommonGenres(books) {
  let result = [];
  books.forEach(book => {
    //check if the result contains current book.genre
    let resultIncludesGenre = result.find(genre => genre.name === book.genre);
    if (resultIncludesGenre === undefined) {
      // book.genre does not exist, add a new key-value pair
      result.push({ name: book.genre, count: 1 })
    } else {
      //if it exists, add 1 to count of resultIncludesGenre
      resultIncludesGenre.count++;
    }
  });
  return getTopFive(result);
}

function getMostPopularBooks(books) {
  let mostPopularBooks = [];
  books.forEach(book => {
    let borrowers = book.borrows;
    //create an object of book title and borrowers.length adn add to the result
    mostPopularBooks.push({name: book.title, count: borrowers.length}); 
  })
  //use helper function to sort the result to get top five results
  return getTopFive(mostPopularBooks);
}

function getMostPopularAuthors(books, authors) {
 let mostPopularAuthors = [];
 //access each item of books
 books.forEach(book => {
//access each item of authors
  authors.forEach(author => {
//access authors id and name keys
    const {id, name} = author;
//author's full name
    const fullName = `${name.first} ${name.last}`;
//find matching id in two arrays    
    if (book.authorId === id){
//when match is found add new object to the result
      mostPopularAuthors.push({name: fullName, count: book.borrows.length});
    }
  });
 });
 return getTopFive(mostPopularAuthors);
}


 

//helper function
function getTopFive(result){
  return result.sort((itemA,itemB) => itemB.count - itemA.count).slice(0,5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
