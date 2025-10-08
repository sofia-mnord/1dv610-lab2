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
   */
  constructor(title, author) {
    validateTitleString(title)
    

    // TODO: validate author

    this.#title = title.trim()
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

  setnumberOfPages (numberOfPages) {
    validateNumberOfPages(numberOfPages)
    this.#numberOfpages = numberOfPages
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

  setReadingTime (readingTimeInHours) {
    validateReadingTime(readingTimeInHours)
    this.#readingTime = readingTimeInHours
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

  /**
   * Gets the author of the book.
   *
   * @readonly
   * @memberof Book
   */
  get author () {
    return this.#author
  }

  /**
   * Calculates how many pages are read per hour.
   * 
   * @returns {number} - The average reading speed, expressed in pages per hour.
   */
  calculatePagesReadPerHour () {
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

  toString () {
    return `${this.#title}`
  }
}

