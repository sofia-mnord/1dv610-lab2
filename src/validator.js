/**
 * Validates the title string in the Book class.
 *
 * @param {string} string - The string to validate.
 */
export function validateString (string) {
  if (typeof string !== 'string') {
    throw new Error('Title must be a string.')
  }
  if (string.trim().length === 0) {
    throw new Error('Title cannot be empty.')
  }
}

/**
 * Validates the number of pages in the Book class.
 *
 * @param {number} numberOfPages - The number to validate.
 */
export function validateNumberOfPages (numberOfPages) {
  if (!Number.isInteger(numberOfPages)) {
    throw new Error('The number of pages must be an integer.') 
  }

  if (numberOfPages <= 0) {
    throw new Error('The number of pages must be 1 or higher.')
  }
}

/**
 * Validates the reading time in the book class.
 *
 * @param {number} readingTime - The number to validate. 
 */
export function validateReadingTime (readingTime) { 
  if (typeof readingTime !== 'number' || Number.isNaN(readingTime)) {
    throw new Error('The reading time must be a number.')
  }

  if (readingTime <= 0) {
    throw new Error('The reading time must be above 0.')
  }
}

