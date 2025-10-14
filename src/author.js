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
      throw new Error('The book needs to be an instance of the Book class.')
    }
  
    if (!this.#books.includes(book)) {
      this.#books.push(book)
    } else {
      throw new Error('This book is already added to this author.')
    }
  
    if (book.author !== this) {
      book.setAuthor(this)
    } 
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