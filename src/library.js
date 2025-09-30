import { Book } from './book.js'

/**
 * Encapsulates the Library class.
 */
export class Library {
  #books = []

/**
 * Adds a book to the library.
 *
 * @param {object} book - The book that to be added. 
 */
  addBookToLibrary (book) {
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
    return Math.round(this.totalPages / this.totalHours)
  }

  /**
   * Calculates the average reading speed based on all books in the library.
   *
   * @returns {number} - The average reading speed, expressed in words per minute.
   */
  calculateAverageWordsPerMinute () {
    const words = this.totalPages * 275
    const minutes = this.totalHours * 60

    return Math.round(words / minutes)
  }
}