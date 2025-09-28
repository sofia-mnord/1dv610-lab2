import { Library } from './library.js'
import { Book } from './book.js'

const library = new Library()
library.addBookToLibrary('The Hobbit', 300, 5)
library.addBookToLibrary('Emma', 500, 7)

console.log(library.totalPages)
console.log(library.totalNumberOfBooks)

const book = new Book('Harry Potter', 500, 6)

console.log(book.calculateReadingSpeed())