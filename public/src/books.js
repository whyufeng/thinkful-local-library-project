
function findAuthorById(authors, id) {
  return authors.find(author => author.id===id);
}

function findBookById(books, id) {
  return books.find(book => book.id===id);
}

function partitionBooksByBorrowedStatus(books) {
  let check_out_list = new Array()
  let returned_list = new Array()
  for (const book of books) {
    book.borrows[0].returned ? returned_list.push(book): check_out_list.push(book);
    }
  return [check_out_list, returned_list];
}

function getBorrowersForBook(book, accounts) {
  let borrowers_list = new Array();
  let display_num = book.borrows.length >10?10:book.borrows.length;
  for(let i=0;i<display_num;i++){
      account_found = accounts.find(account => account.id ==  book.borrows[i].id);
      account_found['returned'] = book.borrows[i].returned;
      borrowers_list.push(account_found);
    }
  return borrowers_list;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
