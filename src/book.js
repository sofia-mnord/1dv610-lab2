export class Book {
  #title
  #genre
  #numberOfpages
  constructor(title, genre, numberOfPages) {
    this.#title = title
    this.#genre = genre
    this.#numberOfpages = numberOfPages
  }

  get numberOfPages () {
  return this.#numberOfpages
  }
}
