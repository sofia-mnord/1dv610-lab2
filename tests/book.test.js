import { Book } from '../src/book.js'

describe('Book constructor', () => {
  test('should create a book with the specified properties', () => {
    const book = new Book ('Persuasion', 272, 4.5, 'Jane Austen')

    expect(book.title).toBe('Persuasion')
    expect(book.numberOfPages).toBe(272)
    expect(book.readingTime).toBe(4.5)
    expect(book.author).toBe('Jane Austen')
  })

  test('should throw exception', () => {
    expect(() => new Book ('', 272, 4.5, 'Jane Austen')).toThrow('Title cannot be empty.')
  })

test('should throw exception', () => {
    expect(() => new Book (5, 272, 4.5, 'Jane Austen')).toThrow('Title must be a string.')
  })

test('should throw exception', () => {
    expect(() => new Book ('Persuasion', '272', 4.5, 'Jane Austen')).toThrow('The number of pages must be a number.')
  })

test('should throw exception', () => {
    expect(() => new Book ('Persuasion', 0, 4.5, 'Jane Austen')).toThrow('The number of pages must be 1 or higher.')
  })

test('should throw exception', () => {
    expect(() => new Book ('Persuasion', 272, '4.5', 'Jane Austen')).toThrow('The reading time must be a number.')
  })

test('should throw exception', () => {
    expect(() => new Book ('Persuasion', 272, 0, 'Jane Austen')).toThrow('The reading time must be above 0.')
  })
})