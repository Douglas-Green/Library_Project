// FIRST DEFINE THE BOOK CLASS
class Book {
  constructor(id, title, author, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.read = read;
  }
}

// THEN, DEFINE THE LIBRARY CLASS
class Library {
  // The constructor is a special method for creating and initializing an object
  constructor() {
    // These are properties of the library class
    this.bookCount = 0;
    this.books = [];
  }

  // This is a method to mark a book as read
  markRead(checkbox, id) {
    // loop through each book in the books array
    for (let book of this.books) {
      // if the id of the book matches the id passed in, mark the book as read
      if (book.id === id) {
        book.read = true;
        checkbox.checked = true;
        checkbox.disabled = true;
      }
    }
  }

  // This is a method to add a book to the library
  addBook() {
    // these lines get the value from the input fields
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const read = document.getElementById("read").checked;

    // this line creates a new book object
    const book = new Book(this.bookCount++, title, author, read);
    // this line adds the new book to the book array
    this.books.push(book);

    // these lines create a new row for the book in the table
    const row = document.createElement("tr");
    // if the book has been read, add the 'read' class to the row
    if (book.read) {
      row.classList.add("read");
    }
    // assign an id to the row
    row.id = `book-${book.id}`; // Assign an id to the row

    // these lines create the cells for the new row
    const titleCell = document.createElement("td");
    const authorCell = document.createElement("td");
    const readCell = document.createElement("td");
    const removeCell = document.createElement("td");
    const removeButton = document.createElement("button");

    // these lines set the text content for the cells
    titleCell.textContent = book.title;
    authorCell.textContent = book.author;
    readCell.textContent = book.read ? "Yes" : "No";
    removeButton.textContent = "Remove";
    // this line adds an event listener to the remove button
    removeButton.addEventListener("click", () => this.removeBook(book.id));

    // these lines append the cells to the row
    row.appendChild(titleCell);
    row.appendChild(authorCell);
    row.appendChild(readCell);
    row.appendChild(removeCell);
    removeCell.appendChild(removeButton);

    // this line gets the table body
    const tableBody = document.getElementById("book-list");
    // this line appends the row to the table body
    tableBody.appendChild(row);
  }

  // this is a method to remove a book from the library
  removeBook(id) {
    // this line removes the book from the books array
    this.books = this.books.filter(book => book.id !== id);
    // this line removes the row for the book from the table
    const bookToRemove = document.getElementById(`book-${id}`);
    bookToRemove.remove();
  }
}
// this line creates a new library object
const library = new Library();

// this line adds an event listener to the form
document
  .getElementById("addBookForm")
  .addEventListener("submit", function (event) {
    // this line prevents the form from submitting
    event.preventDefault();
    // this line adds a book to the library
    library.addBook();
    // this line resets the form
    event.target.reset();
  });
