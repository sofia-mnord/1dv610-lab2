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

}
