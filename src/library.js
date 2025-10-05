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
  addBookToLibrary (title, readingTime, author) {
    const book = new Book(title, readingTime, author)

    this.#books.push(book)

    return book
  }

  // TODO: Function for removing book from library.

  /**
   * Calculates the total number of pages of all books in the library.
   *
   * @readonly
   * @memberof Library
   */
  get totalPages () {
    return this.#books.reduce((sum, book) => sum + book.numberOfPages, 0)
  }

  setBookPages (book, pages) {
    book.setnumberOfPages(pages)
  }

  /**
   * Calculates the total hours of reading all books in the library.
   *
   * @readonly
   * @memberof Library
   */
  get totalHours () {
    return this.#books.reduce((sum, book) => sum + book.readingTime, 0)
  }

  /**
   * Gets the total number of books in the library.
   *
   * @readonly
   * @memberof Library
   */
  get totalNumberOfBooks () {
    return this.#books.length
  }

  /**
   * Creates an array with all book titles currently in the library.
   *
   * @returns - An array of all book titles.
   */
  getAllBookTitles () {
    let bookTitles = []
    for (const book of this.#books) {
      bookTitles.push(book.title)
    }
    return bookTitles
  }

  /**
   * Calculates the average reading speed based of all books in the library.
   *
   * @returns {number} - The average reading speed, expressed in pages per hour
   */
  calculateAverageReadingSpeed () {
    // TODO: Add validation and throw exception
    return Math.round(this.totalPages / this.totalHours)
  }

  /**
   * Calculates the average reading speed based on all books in the library.
   *
   * @returns {number} - The average reading speed, expressed in words per minute.
   */
  calculateAverageWordsPerMinute () {
    const words = this.totalPages * 275 // clarify what 275 is
    const minutes = this.totalHours * 60

    return Math.round(words / minutes)
  }
}