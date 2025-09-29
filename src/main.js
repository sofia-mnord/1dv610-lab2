import { Library } from './library.js'
import { Book } from './book.js'

const library = new Library()
library.addBookToLibrary('The Hobbit', 300, 5)
library.addBookToLibrary('Emma', 500, 7)
library.addBookToLibrary('Practical Magic', 300, 3.5)

console.log(library.totalPages)
console.log(library.totalNumberOfBooks)
console.log(library.getAllBookTitles())

const book = new Book('Harry Potter', 500, 6)

console.log(book.calculatePagesReadPerHour() + ' pages per hour.')
console.log(book.calculateWordsReadPerMinute() + ' words per minute.')