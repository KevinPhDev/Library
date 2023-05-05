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

const cardContainer = document.querySelector('.cardContainer');

function addCard() {
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.border = '2px solid black';
    card.style.height = '200px';
    card.style.width = '200px';
    cardContainer.appendChild(card);
}

addBookToLibrary('book1', 'author1', 10);
addBookToLibrary('book2', 'author2', 20);
addBookToLibrary('book3', 'author3', 30);


for (i = 0; i < myLibrary.length; i++) {
    addCard();
    const bookTitle = document.createElement('h1');
    bookTitle.innerText = `${myLibrary[i]}`;
    document.body.appendChild(bookTitle);
}

console.log(myLibrary);