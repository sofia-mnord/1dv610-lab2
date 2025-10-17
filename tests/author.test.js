import { Author } from  '../src/author.js'
import { Book } from '../src/book.js'

describe('Author Public Interface', () => {
  test('array should contain one element', () => {
    const author = new Author('Jane Austen', 'british')
    const book = new Book('Northanger Abbey')
    author.addBook(book)

    expect(author.numberOfBooksWrittenByAuthor).toBe(1)
  })

  test('array should contain zero elements', () => {
    const author = new Author('Jane Austen', 'british')
    const book = new Book('Northanger Abbey')
    author.addBook(book)
    author.deleteBook(book)

    expect(author.numberOfBooksWrittenByAuthor).toBe(0)
  })

  test('should return the book title written by author', () => {
    const author = new Author('Jane Austen', 'british')
    const book = new Book('Northanger Abbey')
    author.addBook(book)

    expect(author.findBookTitlesWrittenByAuthor()).toStrictEqual(["Northanger Abbey"])
  })

  test('should return true if the author has the book', () => {
    const author = new Author('Jane Austen', 'british')
    const book = new Book('Northanger Abbey')
    author.addBook(book)

    expect(author.hasBook(book)).toBe(true)
  })
})