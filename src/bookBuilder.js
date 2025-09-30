import { Book } from './book.js'
import { validateNumberOfPages, validateReadingTime, validateTitleString } from './validator.js'

export class BookBuilder {
  // title
  // pages
  // reading time
  // author
  // genre?
  title
  numberOfpages
  readingTime
  author

  setTitle (title) {
    validateTitleString(title)
    this.title = title
    return this
  }

  setNumberOfPages (numberOfPages) {
    validateNumberOfPages(numberOfPages)
    this.numberOfpages = numberOfPages
    return this
  }

  setReadingTime (readingTime) {
    validateReadingTime()
    this.readingTime = readingTime
    return this
  }

  setAuthor (author) {
    this.author = author
    return this
  }

  build () {
    return new Book(this)
  }
}