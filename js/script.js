const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("open-modal-btn");
const closeModalBtn = document.getElementById("close-modal-btn")
const addBtn = document.getElementById("add-book-btn")
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const library = [];

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

openModalBtn.addEventListener("click", openModal);

closeModalBtn.addEventListener("click", closeModal);

addBtn.addEventListener("click", function(event) {
    event.preventDefault();
    const book = new Book(title.value, author.value, pages.value);
    library.push(book);
    clearInput();
    closeModal();

    console.log(library); 
})
