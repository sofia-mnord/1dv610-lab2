import { Library } from './library.js'

const library = new Library()
library.addBookToLibrary('The Hobbit', 300)
library.addBookToLibrary('Emma', 500)

console.log(library.totalPages)
console.log(library.totalBooks)