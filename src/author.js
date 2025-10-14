import { Book } from './book.js'
import { validateString } from './validator.js'
/**
 * Encapsulates the Author class.
 */
export class Author {
  #name
  #nationality
  #books = []

  constructor (name, nationality) {
    validateString(name)
    this.#name = name
    validateString(nationality)
    this.#nationality = nationality
  }

  get name () {
    return this.#name
  }

  get nationality () {
    return this.#nationality
  }

  addBook (book) {
   if (!(book instanceof Book)) {
      throw new Error('Invalid book object.')
    }
    // check if array already contains book
    if (!this.#books.includes(book)) {
      this.#books.push(book)
    }

    // set book's author to this
    // check if author already is this
    book.setAuthor(this)
  }

  // TODO: Add function for removing book

  get numberOfBooksWrittenByAuthor () {
    return this.#books.length
  }

  findBookTitlesWrittenByAuthor () {
    const books = this.#books.map(book => book.title)
    return books
  }
}