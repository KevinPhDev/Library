let myLibrary = [];
let i = 0;

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

function addCard(i) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.border = '2px solid black';
    card.style.height = '200px';
    card.style.width = '200px';
    cardContainer.appendChild(card);
    const bookTitle = document.createElement('h1');
    bookTitle.innerText = `${myLibrary[i]}`;
    card.appendChild(bookTitle);
    const removeButton = document.createElement('button');
    removeButton.style.border = '1px solid black';
    removeButton.style.width = 'fit-content';
    removeButton.style.height = 'fit-content';
    removeButton.style.padding = '5px'
    removeButton.classList.add('remove');
    removeButton.innerText = 'Remove';
    card.appendChild(removeButton);
}

addBookToLibrary('book1', 'author1', 10);
addBookToLibrary('book2', 'author2', 20);
addBookToLibrary('book3', 'author3', 30);

function displayBook() {
    for (i; i < myLibrary.length; i++) {
        addCard(i);
        console.log(i);
    }
}
if (i < myLibrary.length) {
    displayBook();
}

function openForm() {
    document.getElementById("bookForm").style.display = "block";
}

function closeForm() {
    document.getElementById("bookForm").style.display = "none";
}

const submitBook = document.getElementById('submitBook');

submitBook.addEventListener('click', function (event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    
    addBookToLibrary(title, author, pages);
    displayBook();
})
