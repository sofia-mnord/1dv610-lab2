/**
 * Encapsulates the Author class.
 */
export class Author {
  #name
  #countryOfOrigin

  constructor (name, countryOfOrigin) {
    this.#name = name
    this.#countryOfOrigin = countryOfOrigin
  }

  get name () {
    return this.#name
  }

  get countryOfOrigin () {
    return this.#countryOfOrigin
  }
}