import { Library } from './library.js'
import { Book } from './book.js'

const library = new Library()
const hobbit = library.addBookToLibrary('The Hobbit', 5)
library.setBookPages(hobbit, 300)
/* library.addBookToLibrary('Emma', 500, 7)
library.addBookToLibrary('Practical Magic', 300, 3.5) */

console.log(library.totalPages)
console.log(library.totalNumberOfBooks)
console.log(library.getAllBookTitles())
console.log(library.calculateAverageReadingSpeed())
console.log('Average wpm: ' + library.calculateAverageWordsPerMinute())

const book = new Book('Harry Potter', 6)

book.setnumberOfPages(500)

console.log(book.calculatePagesReadPerHour() + ' pages per hour.')
console.log(book.calculateWordsReadPerMinute() + ' words per minute.')