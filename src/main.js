import { Library } from './library.js'
import { Book } from './book.js'

const library = new Library()
const hobbit = library.addBookToLibrary('The Hobbit')
library.setBookPages(hobbit, 300)
library.setReadingTime(hobbit, 5)
const emma = library.addBookToLibrary('Emma')
library.setBookPages(emma, 500)
library.setReadingTime(emma, 7)

console.log(library.totalPages)
console.log(library.totalNumberOfBooks)
console.log(library.getAllBookTitles())
console.log(library.calculateAverageReadingSpeed())
console.log('Average wpm: ' + library.calculateAverageWordsPerMinute())

const book = new Book('Harry Potter')

book.setnumberOfPages(500)
book.setReadingTime(7)

console.log(book.calculatePagesReadPerHour() + ' pages per hour.')
console.log(book.calculateWordsReadPerMinute() + ' words per minute.')