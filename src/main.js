import { Library } from './library.js'
import { Book } from './book.js'
import { Author } from './author.js'

const library = new Library()
const tolkien = new Author('J.R.R Tolkien', 'British')
const hobbit = library.addBookToLibrary('The Hobbit')
library.setBookPages(hobbit, 300)
library.setReadingTime(hobbit, 5)
library.setAuthor(hobbit, tolkien)
const austen = new Author('Jane Austen', 'British')
const emma = library.addBookToLibrary('Emma')
library.setBookPages(emma, 500)
library.setReadingTime(emma, 7)
library.setAuthor(emma, austen)

console.log(library.totalPages)
console.log(library.totalNumberOfBooks)
console.log(library.getAllBookTitles())
console.log(library.calculateAverageReadingSpeed())
console.log('Average wpm: ' + library.calculateAverageWordsPerMinute(300))

const book = new Book('Harry Potter')

book.setnumberOfPages(500)
book.setReadingTime(7)

console.log(book.calculatePagesReadPerHour() + ' pages per hour.')
console.log(book.calculateWordsReadPerMinute() + ' words per minute.')

console.log(library.getAllBookTitles())

console.log('It would take ' + library.estimateReadingTimeForBook(408) + ' hours to read this book.')

console.log(library.findLongestBook() + ' is the longest book, with ' + library.findLongestBook().numberOfPages + ' pages.')