import { Book } from './book.js'

export class BookBuilder {
  title
  numberOfPages
  readingTime
  author

  setTitle (title) {
    //validateTitleString(title)
    this.title = title
    return this
  }

  setNumberOfPages (numberOfPages) {
    //validateNumberOfPages(numberOfPages)
    this.numberOfpages = numberOfPages
    return this
  }

  setReadingTime (readingTime) {
    //validateReadingTime()
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