import { Library } from './library.js'

const library = new Library()
library.addBookToLibrary('The Hobbit', 300, 5)
library.addBookToLibrary('Emma', 500, 7)

console.log(library.totalPages)
console.log(library.totalNumberOfBooks)
console.log(library.calculateReadingSpeed(300, 5) + ' pages per hour')