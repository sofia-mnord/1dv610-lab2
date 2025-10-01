import { Library } from '../src/library.js'

describe('Test to add books to library', () => {
  const library = new Library()
  library.addBookToLibrary('Persuasion', 272, 4.5, 'Jane Austen')
  library.addBookToLibrary('Emma', 588, 10, 'Jane Austen')

  test('book array should contain one element', () => {
    expect(library.totalNumberOfBooks).toBe(2)
  })

  test('should return an array of the book titles in the library', () => {
    expect(library.getAllBookTitles()).toStrictEqual(["Persuasion", "Emma"])
  })

  test('should add all number of pages in the library', () => {
    expect(library.totalPages).toBe(860)
  })

  test('should add the reading time of all books in the library', () => {
    expect(library.totalHours).toBe(14.5)
  })

  test('should calculate average reading speed', () => {
    expect(library.calculateAverageReadingSpeed()).toBe(59)
  })

  test('should calculate average words read per minute', () => {
    expect(library.calculateAverageWordsPerMinute()).toBe(272)
  })
})