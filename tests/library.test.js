import { Library } from '../src/library.js'
import { Author } from '../src/author.js'

// addBooksToLibrary
describe('Library Public Interface', () => {

  test('array should contain one element.', () => {
    const library = new Library()
    library.addBookToLibrary('Persuasion')
    expect(library.totalNumberOfBooks).toBe(1)
  })

  // deleteBook
  test('array should contain zero elements.', () => {
    const library = new Library()
    library.addBookToLibrary('Persuasion')
    library.deleteBook('Persuasion')
    expect(library.totalNumberOfBooks).toBe(0)
  })

  // setBookPages
  test('should return total number of pages', () => {
    const library = new Library()
    library.addBookToLibrary('Persuasion')
    library.setBookPages('Persuasion', 288)
    library.addBookToLibrary('Emma')
    library.setBookPages('Emma', 500)
    
    expect(library.totalPages).toBe(788)
  })

  // setReadingTime
  test('should return total number of hours', () => {
    const library = new Library()
    library.addBookToLibrary('Persuasion')
    library.setReadingTime('Persuasion', 5)
    library.addBookToLibrary('Emma')
    library.setReadingTime('Emma', 7.5)
    
    expect(library.totalHours).toBe(12.5)
  })

  // setAuthor
    test('should set the author', () => {
    const library = new Library()
    const book = library.addBookToLibrary('Persuasion')
    const author = new Author('Jane Austen', 'british')
    library.setAuthor('Persuasion', author)
    
    expect(book.author).toBe(author)
  })

  // getAllBookTitles
    test('should return an array of the books in the library', () => {
      const library = new Library()
      library.addBookToLibrary('Persuasion')
      library.addBookToLibrary('Emma')

      expect(library.getAllBookTitles()).toStrictEqual(["Persuasion", "Emma"])
    })

    // calculateAverageReadingSpeed
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

   // calculateAverageWordsPerMinute
    test('should return taverage words read per minute', () => {
      const library = new Library()
      library.addBookToLibrary('Persuasion')
      library.setReadingTime('Persuasion', 5)
      library.setBookPages('Persuasion', 288)
      library.addBookToLibrary('Emma')
      library.setReadingTime('Emma', 7.5)
      library.setBookPages('Emma', 500)
      
      expect(library.calculateAverageWordsPerMinute()).toBe(289)
   })
})





// estimateReadingTimeForBook

// findLongestBook

// findShortestBook

// toString