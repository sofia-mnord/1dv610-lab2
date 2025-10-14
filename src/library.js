import { Book } from './book.js'
import { validateNumberOfPages } from './validator.js'

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
  addBookToLibrary (title, author) {
    const book = new Book(title, author)

    this.#books.push(book)

    return book
  }


  /**
   * Deletes the specified book from the library.
   *
   * @param {object} bookToDelete
   * @returns {object} - The deleted book.
   */
  deleteBook (bookToDelete) {
    const indexOfBookToDelete = this.#books.findIndex((book) => book === bookToDelete)
    if (indexOfBookToDelete === -1) {
      throw new Error('The book was not found.')
    }
    return this.#books.splice(indexOfBookToDelete, 1)
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

  setReadingTime (book, hours) {
    book.setReadingTime(hours)
  }

  setAuthor (book, author) {
    book.setAuthor(author)
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
   * @param {number} [wordsPerPage = 275] - The number of words per page, 275 as default.
   * @returns {number} - The average reading speed, expressed in words per minute.
   */
  calculateAverageWordsPerMinute (wordsPerPage = 275) {
    const words = this.totalPages * wordsPerPage
    const minutes = this.totalHours * 60

    return Math.round(words / minutes)
  }

  /**
   * Estimates how many hours it would take to read a book, based on the number of pages.
   * @param {number} numberOfPages - How many pages are in the book.
   * @returns {number} - The number of hoursit would take to read the book.
   */
  estimateReadingTimeForBook (numberOfPages) {
    validateNumberOfPages(numberOfPages)
    const averageReadingSpeed = this.calculateAverageReadingSpeed()
    return (numberOfPages / averageReadingSpeed).toFixed(1)
  }

  // TODO: method for finding the longest book
  findLongestBook () {
    
  }

  // TODO: method for finding the shortest book

  // TODO: method for average book length

  // TODO: toString-method for Library?
}