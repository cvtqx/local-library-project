function findAccountById(accounts, id) {
  //iterate through the accounts object
  for (let account in accounts){
  //find a matching account
  const person = accounts[account];
    if(person.id === id)
      return person;
  }
}

function sortAccountsByLastName(accounts) {
  //use sort method to sort by last name
  return accounts.sort((accountA, accountB) => 
    accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1
)}

function getTotalNumberOfBorrows(account, books) {
  const result = books.reduce((acc, book) =>{
    //books borrows array
    const borrowers = book.borrows;
    //get the length of array of all books borrowed by account.id
    let count = borrowers.filter((borrower) => borrower.id === account.id).length;
    //add count to the accumulator
    acc += count;
    return acc;
  }, 0);
  return result;
}

  
function getBooksPossessedByAccount(account, books, authors) {
    let result = [];
    //iterate through books array
    books.forEach(book => {
      //check if any of the books are currently with borrower.id and !returned
      let borrowed = book.borrows.some(
        borrower => account.id === borrower.id && !borrower.returned
      );
      //find author with author.id === book.authorId;
      let author = authors.find(author => book.authorId === author.id);
      //add this author object to the book object
      book.author = author;
      //if borrowed returned true, add book to the result array
      if (borrowed) {
        result.push(book);
      }
    });
    return result;
  }
  
  


  





module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
