function findAuthorById(authors, id) {
  //use find method to find author with matching id
  return authors.find(author => author.id === id);
}

function findBookById(books, id) {
  //use find method to find book with matching id
  return books.find(book => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
 let currentlyCheckedOut = [];
 let currentlyReturned = [];
 //iterate through books array
 books.forEach(book => {
//access book.borrows array
  const checkoutHistory = book.borrows;
//check if there is a returned:false record
  (checkoutHistory.some(checkout =>
        !checkout.returned))?
//if there is, add book to the currentlyCheckedOut array
        currentlyCheckedOut.push(book):
//if there isn't, add book to the currentlyReturned array
        currentlyReturned.push(book);
        })
return [currentlyCheckedOut, currentlyReturned];
 }
 

function getBorrowersForBook(book, accounts) {
  let result = [];
  const borrowers = book.borrows;
  //access borrowers array
  borrowers.map(borrower => {
  //access accounts array
    accounts.forEach(account => {
  //find matching ids in accounts and borrowers
      if (account.id === borrower.id) {
  //add return status account
        account.returned = borrower.returned;
        result.push(account);
      }
    });
  });
  return result.slice(0, 10);
}


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
