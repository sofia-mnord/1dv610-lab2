/**
 * Encapsulates the Book class.
 */
export class Book {
  #title
  #numberOfpages
  #readingTime
  /**
   * Creates an instance of the current class.
   * @param {string} title - The book's title.
   * @param {number} numberOfPages - The number of pages in the book.
   * @param {number} readingTime - Number of hours it took to read the book.
   */
  constructor(title, numberOfPages, readingTime) {
    this.#title = title
    this.#numberOfpages = numberOfPages
    this.#readingTime = readingTime
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
   * Calculates how many pages are read per hour.
   * 
   * @returns {number} - The average reading speed, expressed in pages per hour.
   */
  calculateReadingSpeed () {
    if (this.#readingTime <= 0) {
      throw new Error('The reading time must be above 0.')
    }
    return this.#numberOfpages / this.#readingTime
  }
}
