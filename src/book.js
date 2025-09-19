/**
 * Encapsulates the Book class.
 */
export class Book {
  #title
  #numberOfpages
  /**
   * Creates an instance of the current class.
   * @param {string} title - The book's title.
   * @param {number} numberOfPages - The number of pages in the book.
   */
  constructor(title, numberOfPages) {
    this.#title = title
    this.#numberOfpages = numberOfPages
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
