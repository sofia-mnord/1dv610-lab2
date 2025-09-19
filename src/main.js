import { Book } from './book.js'

let books = [
  new Book('The Hobbit', 'fantasy', 300),
  new Book('Emma', 'fiction', 500)
]

function addNumberOfPages (books) {
  let sum = 0
  for (const book of books) {
    sum += book.numberOfPages
  }
  console.log(sum)
  return sum
}

addNumberOfPages(books)
