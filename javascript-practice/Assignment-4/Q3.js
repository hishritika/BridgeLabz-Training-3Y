class Book {
    constructor(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = false;
    }

    issueBook() {
        if (this.isIssued === false) {
            this.isIssued = true;
            console.log(this.title + " has been issued.");
        } else {
            console.log(this.title + " is already issued.");
        }
    }

    returnBook() {
        if (this.isIssued === true) {
            this.isIssued = false;
            console.log(this.title + " has been returned.");
        } else {
            console.log(this.title + " was not issued.");
        }
    }
}

const books = [
    new Book("JavaScript Basics", "John", "101"),
    new Book("Python Programming", "Alex", "102"),
    new Book("Web Development", "David", "103")
];

function showAvailableBooks() {
    console.log("\nAvailable Books:");

    for (let book of books) {
        if (book.isIssued === false) {
            console.log(book.title + " - ISBN: " + book.ISBN);
        }
    }
}

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

showAvailableBooks();

rl.question("\nEnter ISBN of the book you want to issue: ", function(isbn) {

    let foundBook = books.find(function(book) {
        return book.ISBN === isbn;
    });

    if (foundBook) {
        foundBook.issueBook();
    } else {
        console.log("Book not found.");
    }

    showAvailableBooks();

    rl.close();
});