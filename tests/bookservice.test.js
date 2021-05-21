const bookService = require("../JSfiles/bookservice");
const booksProvider = require("../JSfiles/books-provider");
const emailService = require("../JSfiles/email-service");

describe("searchBook", () => {
  test("it should return 1 book", () => {
    // mock db
    booksProvider.getBooks = jest.fn(() => [
      {
        _id: 1,
        title: "Convict Conditioning"
      }
    ]);
    // mock mail service
    emailService.sendMissingBookEmail = jest.fn();


    const books = bookService.searchBooks("Convict");
    expect(books.length).toBe(1);
  });
});
