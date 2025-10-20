# ReadingStats
This is a school assignment from the course "Introduction to software quality" at the Linnaeus University in Sweden. 

A module that provides reading stats, such as how many pages you have read in total, average reading speed and estimate reading speed.

## Installation
Install the module through npm:
```bash
npm i https://github.com/sofia-mnord/1dv610-lab2
```

## Example
### Adding a book
```javascript
const myLibrary = new Library()
myLibrary.addBookToLibrary('Pride and Prejudice')
```
### Set number of pages and reading time
```javascript
myLibrary.setBookPages('Pride and Prejudice', 416)
myLibrary.setReadingTime('Pride and Prejudice', 5)
```
### Calculate total number of pages and total reading time of all books in the library
```javascript
myLibrary.totalPages
myLibrary.totalHours
```
### Set author
```javascript
const author = new Author('Jane Austen', 'british')
myLibrary.setAuthor('Pride and Prejudice', author)
```
### See how many books there are in the library and get a list of the titles
```javascript
myLibrary.totalNumberOfBooks
myLibrary.getAllBookTitles()
```
### Calculate average reading speed
```javascript
myLibrary.calculateAverageReadingSpeed()
myLibrary.calculateAverageWordsPerMinute()
```
### Estimate reading time of a book, based on average reading speed
```javascript
myLibrary.estimateReadingTimeForBook(578)
```
### Find longest and shortest book
```javascript
myLibrary.findLongestBook()
myLibrary.findShortestBook()
```
### Print a library report
```javascript
console.log(myLibrary.toString())
```
