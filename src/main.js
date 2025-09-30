import { Library } from './library.js'
import { Book } from './book.js'
import { Author } from './author.js'
import { BookBuilder } from './bookBuilder.js'

const library = new Library()
/* library.addBookToLibrary('The Hobbit', 300, 5)
library.addBookToLibrary('Emma', 500, 7)
library.addBookToLibrary('Practical Magic', 300, 3.5)

console.log(library.totalPages)
console.log(library.totalNumberOfBooks)
console.log(library.getAllBookTitles())
console.log(library.calculateAverageReadingSpeed())
console.log('Average wpm: ' + library.calculateAverageWordsPerMinute()) */

const austen = new Author('Jane Austen', 'British')

const emma = new BookBuilder()
  .setTitle('Emma')
  .setAuthor(austen)
  .setNumberOfPages(500)
  .setReadingTime(7)
  .build()

austen.addBookToAuthor(emma)
console.log(emma.author.name)
library.addBookToLibrary(emma)
console.log(library.getAllBookTitles())