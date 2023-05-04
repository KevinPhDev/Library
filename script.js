let myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(title, author, pages) {
    const book = new Book(title, author, pages);
    myLibrary.push(book.title);
}

addBookToLibrary('book1', 'author1', 10);
addBookToLibrary('book2', 'author2', 20);
addBookToLibrary('book3', 'author3', 30);

for (i = 0; i < myLibrary.length; i++) {
    const h1Title = document.createElement('h1');
    h1Title.innerText = `${myLibrary[i]}`;
    document.body.appendChild(h1Title);
}

console.log(myLibrary);