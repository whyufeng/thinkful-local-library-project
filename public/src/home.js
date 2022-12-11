function getTotalBooksCount(books) {
  /*
  function usage: retrieve the total number of book objects inside of array input
  */
  return books.length;
}

  function getTotalAccountsCount(accounts) {
  /*
  function usage: retrieve the total number of account objects inside of array input
  */
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  /*
  function usage: retrieve the number of books that are currently checked out of the library
  */
  let borrowed_book = 0;
  for (const book of books){
    if (!book.borrows[0].returned) {
      borrowed_book +=1;
    }
  }
  return borrowed_book;
}

function getMostCommonGenres(books) {
  /*
  function usage: obtain five objects or fewer that represents the most common occurring genres,
  ordered from most common to least.
  */
  let genre_freq = books.reduce((pre,cur) => {
        if (cur.genre in pre) {pre[cur.genre]++}
        else {pre[cur.genre] = 1}
        return pre
  }, {})
  let genre_list =Object.keys(genre_freq).map(key =>{return [key, genre_freq[key]]})
  genre_list.sort((a,b) =>b[1]-a[1]);
  let display_num = genre_list.length>5? 5: genre_list.length;
  let ret_list = new Array();
  for (let i=0;i<display_num;i++){
    ret_list.push({name:genre_list[i][0], count:genre_list[i][1]})
  }
  return ret_list;
}

function getMostPopularBooks(books) {
  let book_freq = new Array();
  books.forEach(book => {book_freq.push([book.title, book.borrows.length])});
  book_freq.sort((a,b)=> b[1]-a[1]);
  let display_num = cal_display_number(book_freq);
  let ret_list = new Array();
  for (let i=0;i<display_num;i++){
    ret_list.push({name:book_freq[i][0], count:book_freq[i][1]});
  }
  return ret_list;
}

function cal_display_number(book_freq){
  return book_freq.length>5? 5: book_freq.length;
}

function getMostPopularAuthors(books, authors) {
  let authors_borrow = books.reduce((pre,cur) => {
    if (cur.authorId in pre) {pre[cur.authorId] += cur.borrows.length }
    else {pre[cur.authorId] = cur.borrows.length}
    return pre
  }, {})

  let authors_dict = new Object();
  for (const author of authors){
    authors_dict[author.id] = author.name.first + ' ' + author.name.last;
  }

  let authors_freq =Object.keys(authors_borrow).map(key =>{return [key, authors_borrow[key]]});
  authors_freq.sort((a,b) =>b[1]-a[1]);

  let display_num = authors_freq.length>5? 5: authors_freq.length;
  let ret_list = new Array();
  for (let i=0;i<display_num;i++){
    ret_list.push({name:authors_dict[authors_freq[i][0]], count:authors_freq[i][1]})
  }
  return ret_list;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
