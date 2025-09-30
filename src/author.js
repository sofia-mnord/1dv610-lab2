import { Book } from './book.js'
/**
 * Encapsulates the Author class.
 */
export class Author {
  #name
  #nationality
  #books = []

  constructor (name, nationality) {
    this.#name = name
    this.#nationality = nationality
  }

  get name () {
    return this.#name
  }

  get countryOfOrigin () {
    return this.#nationality
  }

  addBookToAuthor (book) {
    this.#books.push(book)
  }

  get numberOfBooksWrittenByAuthor () {
    return this.#books.length()
  }

  findBookTitlesWrittenByAuthor () {
    let bookTitles = []
    for (const book of this.#books) {
      bookTitles.push(book.title)
    }
    return bookTitles
  }
}