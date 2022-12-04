function findAccountById(accounts, id) {
  return accounts.find(account => account.id == id)
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((pre,cur)=> {return cur.name['last']<pre.name['last']?1:-1});
}

function getTotalNumberOfBorrows(account, books) {
  let borrow_counts = 0;
  books.forEach(book=>{
    if (book.borrows.find(borrow=>borrow.id==account.id)){borrow_counts+=1};})
  return borrow_counts;
}

function getBooksPossessedByAccount(account, books, authors) {
  let checkout_book = books.filter(book=> book.borrows[0].returned == false && book.borrows[0].id == account.id);
  let return_books = checkout_book.map(book => {
    let book_update = book;
    book_update["author"] = authors.find(author => author.id==book.authorId);
    return book_update
  });
  return return_books;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
