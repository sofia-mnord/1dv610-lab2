import { validateNumberOfPages, validateReadingTime, validateTitleString } from './validator.js'
import { Author } from './author.js'
/**
 * Encapsulates the Book class.
 */
export class Book {
  #title
  #numberOfpages
  #readingTime
  #author

  constructor(title) {
    validateString(title)
    this.#title = title.trim()
  }

  get numberOfPages () {
    return this.#numberOfpages
  }

  setnumberOfPages (numberOfPages) {
    validateNumberOfPages(numberOfPages)
    this.#numberOfpages = numberOfPages
  }

  get readingTime () {
    return this.#readingTime
  }

  setReadingTime (readingTimeInHours) {
    validateReadingTime(readingTimeInHours)
    this.#readingTime = readingTimeInHours
  }

  get title () {
    return this.#title
  }

  get author () {
    return this.#author
  }

  setAuthor (author) {
    if (!(author instanceof Author)) {
      throw new Error('The author needs to be an instance of the Author class.')
    }
      this.#author = author

      if (!author.hasBook(this)) {
        author.addBook(this)
      }
  }

  calculatePagesReadPerHour () {
    return Math.round(this.#numberOfpages / this.#readingTime)
  }

  calculateWordsReadPerMinute (wordsPerPage = 275) {
    const numberOfWords = this.#numberOfpages * wordsPerPage
    const minutes = this.#readingTime * 60

    return Math.round(numberOfWords / minutes)
  }

  toString () {
    return `${this.#title}`
  }
}

