console.log("Hello World!\n==========\n");

// PROJECT Section
console.log("PROJECT:\n==========\n");
class Book {
  constructor(id, title, author, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.read = read;
  }
}

class Library {
  constructor() {
    this.bookCount = 0;
    this.books = [];
  }

  markRead(checkbox, id) {
    for (let book of this.books) {
      if (book.id === id) {
        book.read = true;
        checkbox.checked = true;
        checkbox.disabled = true;
      }
    }
  }

  addBook() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const read = document.getElementById("read").checked;

    const book = new Book(this.bookCount++, title, author, read);
    this.books.push(book);

    const row = document.createElement("tr");
    row.id = `book-${book.id}`; // Assign an id to the row
    const titleCell = document.createElement("td");
    const authorCell = document.createElement("td");
    const readCell = document.createElement("td");
    const removeCell = document.createElement("td");
    const removeButton = document.createElement("button");

    titleCell.textContent = book.title;
    authorCell.textContent = book.author;
    readCell.textContent = book.read ? "Yes" : "No";
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => this.removeBook(book.id));

    removeCell.appendChild(removeButton);
    row.appendChild(titleCell);
    row.appendChild(authorCell);
    row.appendChild(readCell);
    row.appendChild(removeCell); // Append the removeCell to the row

    const tableBody = document.getElementById("book-list");
    tableBody.appendChild(row);
  }
  removeBook(id) {
    this.books = this.books.filter(book => book.id !== id);
    const bookToRemove = document.getElementById(`book-${id}`);
    bookToRemove.remove();
  }
}

const library = new Library();

document
  .getElementById("addBookForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    library.addBook();
    event.target.reset();
  });
