import { validateNumberOfPages, validateReadingTime, validateTitleString } from './validator.js'
/**
 * Encapsulates the Book class.
 */
export class Book {
  #title
  #numberOfpages
  #readingTime
  #author
  /**
   * Creates an instance of the current class.
   * @param {string} title - The book's title.
   * @param {number} numberOfPages - The number of pages in the book.
   * @param {number} readingTime - Number of hours it took to read the book.
   */
  constructor(title, numberOfPages, readingTime, author) {
    validateTitleString(title)
    validateNumberOfPages(numberOfPages)
    validateReadingTime(readingTime)

    this.#title = title.trim()
    this.#numberOfpages = numberOfPages
    this.#readingTime = readingTime
    this.#author = author
  }

  /**
   * Gets the number of pages in the book.
   *
   * @readonly
   * @memberof Book
   */
  get numberOfPages () {
    return this.#numberOfpages
  }

  /**
   * Gets the number of hours it took to read the book.
   *
   * @readonly
   * @memberof Book
   */
  get readingTime () {
    return this.#readingTime
  }

  /**
   * Gets the title of the book.
   *
   * @readonly
   * @memberof Book
   */
  get title () {
    return this.#title
  }

  get author () {
    return this.#author
  }

  /**
   * Calculates how many pages are read per hour.
   * 
   * @returns {number} - The average reading speed, expressed in pages per hour.
   */
  calculatePagesReadPerHour () {
    if (this.#readingTime <= 0) {
      throw new Error('The reading time must be above 0.')
    }
    return Math.round(this.#numberOfpages / this.#readingTime)
  }

  /**
   * Calculate how many words are read per minute.
   *
   * @returns {number} - The average reading speed, expressed in words per minute.
   */
  calculateWordsReadPerMinute () {
    const numberOfWords = this.#numberOfpages * 275
    const minutes = this.#readingTime * 60

    return Math.round(numberOfWords / minutes)
  }
}
