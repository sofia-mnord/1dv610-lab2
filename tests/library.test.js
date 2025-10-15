import { Library } from '../src/library.js'
import { Author } from '../src/author.js'

describe('Library Public Interface', () => {

  test('array should contain one element.', () => {
    const library = new Library()
    library.addBookToLibrary('Persuasion')
    expect(library.totalNumberOfBooks).toBe(1)
  })

  test('array should contain zero elements.', () => {
    const library = new Library()
    library.addBookToLibrary('Persuasion')
    library.deleteBook('Persuasion')
    expect(library.totalNumberOfBooks).toBe(0)
  })

  test('should return total number of pages', () => {
    const library = new Library()
    library.addBookToLibrary('Persuasion')
    library.setBookPages('Persuasion', 288)
    library.addBookToLibrary('Emma')
    library.setBookPages('Emma', 500)
    
    expect(library.totalPages).toBe(788)
  })

  test('should return total number of hours', () => {
    const library = new Library()
    library.addBookToLibrary('Persuasion')
    library.setReadingTime('Persuasion', 5)
    library.addBookToLibrary('Emma')
    library.setReadingTime('Emma', 7.5)
    
    expect(library.totalHours).toBe(12.5)
  })

  test('should set the author', () => {
    const library = new Library()
    const book = library.addBookToLibrary('Persuasion')
    const author = new Author('Jane Austen', 'british')
    library.setAuthor('Persuasion', author)
    
    expect(book.author).toBe(author)
    expect(author.findBookTitlesWrittenByAuthor()).toStrictEqual(["Persuasion"])
  })

  test('should return an array of the books in the library', () => {
    const library = new Library()
    library.addBookToLibrary('Persuasion')
    library.addBookToLibrary('Emma')

    expect(library.getAllBookTitles()).toStrictEqual(["Persuasion", "Emma"])
  })

  test('should return average reading speed', () => {
    const library = new Library()
    library.addBookToLibrary('Persuasion')
    library.setReadingTime('Persuasion', 5)
    library.setBookPages('Persuasion', 288)
    library.addBookToLibrary('Emma')
    library.setReadingTime('Emma', 7.5)
    library.setBookPages('Emma', 500)
    
    expect(library.calculateAverageReadingSpeed()).toBe(63)
  })

  test('should return average words read per minute', () => {
    const library = new Library()
    library.addBookToLibrary('Persuasion')
    library.setReadingTime('Persuasion', 5)
    library.setBookPages('Persuasion', 288)
    library.addBookToLibrary('Emma')
    library.setReadingTime('Emma', 7.5)
    library.setBookPages('Emma', 500)
    
    expect(library.calculateAverageWordsPerMinute()).toBe(289)
  })

  test('should return hours it would take to read', () => {
    const library = new Library()
    library.addBookToLibrary('Persuasion')
    library.setReadingTime('Persuasion', 5)
    library.setBookPages('Persuasion', 288)
    library.addBookToLibrary('Emma')
    library.setReadingTime('Emma', 7.5)
    library.setBookPages('Emma', 500)
    
    expect(library.estimateReadingTimeForBook(600)).toBe(9.5)
  })

  test('should return the longest book', () => {
    const library = new Library()
    library.addBookToLibrary('Persuasion')
    library.setBookPages('Persuasion', 288)
    library.addBookToLibrary('Emma')
    library.setBookPages('Emma', 500)
    
    expect(library.findLongestBook()).toBe('Emma')
  })

  test('should return the shortest book', () => {
    const library = new Library()
    library.addBookToLibrary('Persuasion')
    library.setBookPages('Persuasion', 288)
    library.addBookToLibrary('Emma')
    library.setBookPages('Emma', 500)
    
    expect(library.findShortestBook()).toBe('Persuasion')
  })
})