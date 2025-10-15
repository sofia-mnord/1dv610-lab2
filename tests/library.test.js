import { Library } from '../src/library.js'

// addBooksToLibrary
describe('Library Public Interface', () => {

  test('array should contain one element.', () => {
    const library = new Library()
    library.addBookToLibrary('Persuasion', 'Jane Austen')
    expect(library.totalNumberOfBooks).toBe(1)
  })

  // deleteBook
  test('array should contain zero elements.', () => {
    const library = new Library()
    library.addBookToLibrary('Persuasion', 'Jane Austen')
    library.deleteBook('Persuasion')
    expect(library.totalNumberOfBooks).toBe(0)
  })

  // totalpages
  test('should return total number of pages', () => {
    const library = new Library()
    library.addBookToLibrary('Persuasion', 'Jane Austen')
    library.setBookPages('Persuasion', 288)
    library.addBookToLibrary('Emma', 'Jane Austen')
    library.setBookPages('Emma', 500)
    
    expect(library.totalPages).toBe(788)
  })

})




// totalHours

// setReadingTime

// setAuthor

// totalNumberOfBooks

// getAllBookTitles

// calculateAverageReadingSpeed

// calculateAverageWordsPerMinute

// estimateReadingTimeForBook

// findLongestBook

// findShortestBook

// toString