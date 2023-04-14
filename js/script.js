const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("open-modal-btn");
const closeModalBtn = document.getElementById("close-modal-btn")
const addBtn = document.getElementById("add-book-btn")
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const main = document.getElementById("main");

function createNewBook() {
    document.createElement('article');
}

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function clearInput() {
    title.value = "";
    author.value = "";
    pages.value = "";
};

function openModal() {
    modal.style.display="flex";
}

function closeModal() {
    modal.style.display="none";
}

function appendNewBook(book) {
        const article = document.createElement('article');
        article.classList.add('book');

        const div = document.createElement('div');

        const h2 = document.createElement('h2');
        h2.textContent = book.title;

        const p = document.createElement('p');
        p.classList.add('author');
        p.textContent = book.author;

        article.appendChild(div);
        div.appendChild(h2);
        div.appendChild(p);

        const p2 = document.createElement('p');
        p2.classList.add('pages');
        p2.textContent = book.pages + " " + "pages";
        article.appendChild(p2);
        main.appendChild(article);
    }

openModalBtn.addEventListener("click", openModal);

closeModalBtn.addEventListener("click", closeModal);

addBtn.addEventListener("click", function(event) {
    event.preventDefault();
    if (title.value === "" || author.value === "" || pages.value === "") return;
    const book = new Book(title.value, author.value, pages.value);
    
    clearInput();
    closeModal();
    appendNewBook(book);
})
