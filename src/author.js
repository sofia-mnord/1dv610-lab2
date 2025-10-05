import { Book } from './book.js'
/**
 * Encapsulates the Author class.
 */
export class Author {
  #name
  #countryOfOrigin
  #books = []

  constructor (name, countryOfOrigin) {
    // TODO: Add validation
    this.#name = name
    this.#countryOfOrigin = countryOfOrigin
  }

  get name () {
    return this.#name
  }

  get countryOfOrigin () {
    return this.#countryOfOrigin
  }

  addBookToAuthor (title, numberOfPages, readingTime) {
    const book = new Book(title, numberOfPages, readingTime)

    this.#books.push(book)
  }

  get numberOfBooksWrittenByAuthor () {
    return this.#books.length
  }

  findBookTitlesWrittenByAuthor () {
    let bookTitles = []
    for (const book of this.#books) {
      bookTitles.push(book.title)
    }
    return bookTitles
  }
}