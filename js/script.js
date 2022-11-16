let get = document.getElementById("get");
let add = document.getElementById("add");

function Cards(nameOfContent, categoryContet, textContent) {
  this.nameOfContent = nameOfContent;
  this.categoryContet = categoryContet;
  this.textContent = textContent;
}

function Libary() {
  this.listOfBooks = [];
}
Libary.prototype.addbook = function (book) {
  this.listOfBooks.push(book);
};

Libary.prototype.render = function (book) {
  const list = document.getElementById("dodato");
  const divCard = document.createElement("div");

  divCard.innerHTML = `
    <p class="nameContent"><b>${book.nameOfContent}</b></p>
    <p class="categoryContent"><b>${book.categoryContet}</b></p>
    <p class="textContent">${book.textContent}</p>
    <p class="linkInContent"><a href="">BOOK OVERVIEW</a></p>
    `;
  list.appendChild(divCard);
};

let book = new Cards(
  "Name Surname,1998",
  "Category: General",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit commodi facilis velit laudantium aperiam deleniti suscipit fugit aperiam THIS IS THE TEXT"
);

let publicNesto = new Libary();

publicNesto.addbook(book);
publicNesto.render(book);
