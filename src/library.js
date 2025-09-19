import { Book } from './book.js'

/**
 * Encapsulates the Library class.
 */
export class Library {
  #books = []

  /**
   * Adds a book to the library.
   * 
   * @param {string} title - The book's title. 
   * @param {number} numberOfPages - The number of pages in the book.
   */
  addBookToLibrary (title, numberOfPages) {
    const book = new Book(title, numberOfPages)

    this.#books.push(book)
  }

  /**
   * Calculates the total number of pages of all books in the library.
   *
   * @readonly
   * @memberof Library
   */
  get totalPages () {
    return this.#books.reduce((sum, book) => sum + book.numberOfPages, 0)
  }
}