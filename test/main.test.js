const { expect } = require("chai");
const {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
} = require("../public/src/home.js");

const authorsFixture = require("./fixtures/authors.fixture");
const booksFixture = require("./fixtures/books.fixture");

describe("Home Page", () => {
  let authors;
  let books;

  beforeEach(() => {
    authors = authorsFixture.slice();
    books = booksFixture.slice();
  });

  describe("getTotalBooksCount()", () => {
    it("should return the total number of books in the array", () => {
      const actual = getTotalBooksCount([{}, {}]);
      expect(actual).to.equal(2);
    });

    it("should return zero if the array is empty", () => {
      const actual = getTotalBooksCount([]);
      expect(actual).to.equal(0);
    });

    it("should return one if the array has one book reocrd", () => {
      const actual = getTotalBooksCount([{
            id: "5f447132d487bd81da01e25e",
            title: "sit eiusmod occaecat eu magna",
            genre: "Science",
            authorId: 8,
            borrows: [
              {
                id: "5f446f2e2cfa3e1d234679b9",
                returned: false,
              },
              {
                id: "5f446f2ed3609b719568a415",
                returned: true,
              },
              {
                id: "5f446f2e1c71888e2233621e",
                returned: true
              }]
          }]);
      expect(actual).to.equal(1);
    });

  });

  describe("getTotalAccountsCount()", () => {
    it("should return the total number of accounts in the array", () => {
      const actual = getTotalAccountsCount([{}, {}]);
      expect(actual).to.equal(2);
    });

    it("should return zero if the array is empty", () => {
      const actual = getTotalAccountsCount([]);
      expect(actual).to.equal(0);
    });

    it("should return one if the array has one record", () => {
      const actual = getTotalAccountsCount([{
        id: "5f446f2ecfaf0310387c9603",
        picture: "https://api.adorable.io/avatars/75/esther.tucker@zillacon.me",
        age: 25,
        name: {
          first: "Esther",
          last: "Tucker",
        },
        company: "ZILLACON",
        email: "esther.tucker@zillacon.me",
        registered: "Thursday, May 28, 2015 2:51 PM",
      }]);
      expect(actual).to.equal(1);
    });
  });

  describe("getBooksBorrowedCount()", () => {
    it("should return the total number of books that are currently borrowed", () => {
      const actual = getBooksBorrowedCount(books);
      expect(actual).to.equal(6);
    });
  });

  describe("getMostCommonGenres()", () => {
    it("should return an ordered list of most common genres", () => {
      const actual = getMostCommonGenres(books);
      const [first, second] = [
        { name: "Science", count: 3 },
        { name: "Classics", count: 2 },
      ];
      expect(actual[0]).to.eql(first);
      expect(actual[1]).to.eql(second);
    });

    it("should limit the list to the top five", () => {
      const actual = getMostCommonGenres(books);
      expect(actual.length).to.equal(5);
    });
  });

  describe("getMostPopularBooks()", () => {
    it("should return an ordered list of most popular books", () => {
      const actual = getMostPopularBooks(books);
      const [first, second] = [
        { name: "sit eiusmod occaecat eu magna", count: 11 },
        { name: "ullamco est minim", count: 5 },
      ];
      expect(actual[0]).to.eql(first);
      expect(actual[1]).to.eql(second);
    });

    it("should limit the list to the top five", () => {
      const actual = getMostPopularBooks(books);
      expect(actual.length).to.equal(5);
    });
  });

  describe("getMostPopularAuthors()", () => {
    it("should return an ordered list of most popular authors", () => {
      const actual = getMostPopularAuthors(books, authors);
      const [first, second] = [
        { name: "Susanne Lawson", count: 11 },
        { name: "Matthews Sanders", count: 5 },
      ];
      expect(actual[0]).to.eql(first);
      expect(actual[1]).to.eql(second);
    });

    it("should limit the list to the top five", () => {
      const actual = getMostPopularAuthors(books, authors);
      expect(actual.length).to.equal(5);
    });
  });
});
