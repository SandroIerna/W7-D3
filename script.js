let row = document.getElementById("row");
let cart = document.getElementById("cart");
let cards = document.querySelectorAll(".card");
let searchBar = document.getElementById("search");

async function fetchBooksAPI(url, search) {
  let response = await fetch(url);
  let booksArray = await response.json();
  console.log(booksArray);
  if (search.length >= 3) {
    let filteredArray = booksArray.filter((book) =>
      book.title.includes(search)
    );

    filteredArray.forEach((book) => {
      row.innerHTML += `<div class="col-3">
        <div class="card">
          <img src="${book.img}" class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">
              ${book.title}
            </p>
            <div class="d-flex justify-content-between">
              <button type="button" class="btn btn-secondary add-to-cart" onclick="addToCart()">
                Add to Cart
              </button>
              <button type="button" class="btn btn-secondary skip" onclick="skip()">
                Skip
              </button>
            </div>
          </div>
        </div>
      </div>`;
    });
  } else {
    booksArray.forEach((book) => {
      row.innerHTML += `<div class="col-3">
      <div class="card">
        <img src="${book.img}" class="card-img-top" alt="..." />
        <div class="card-body">
          <p class="card-text">
            ${book.title}
          </p>
          <div class="d-flex justify-content-between">
            <button type="button" class="btn btn-secondary add-to-cart" onclick="addToCart()">
              Add to Cart
            </button>
            <button type="button" class="btn btn-secondary skip" onclick="skip()">
              Skip
            </button>
          </div>
        </div>
      </div>
    </div>`;
    });
  }
}

// fetchBooksAPI("https://striveschool-api.herokuapp.com/books");

let cartList = [];

addToCart = () => {
  let parent = event.target.parentNode;
  let parent2 = parent.parentNode;
  let card = parent2.parentNode;
  let p = parent2.querySelector("p");
  console.log(p);
  let title = p.innerText;
  if (!cartList.includes(title)) {
    cartList.push(title);
    cart.innerHTML += `<li class="nav-item" onclick="remove()">${title}</li>`;
    card.classList.toggle("red-border");
  }
};

skip = () => {
  let card = event.target.closest(".card");
  console.log(card);
  card.remove();
};

remove = () => {};

display = () => {
  row.innerHTML = "";
  let searchValue = search.value;
  console.log(searchValue);
  fetchBooksAPI("https://striveschool-api.herokuapp.com/books", searchValue);
};

let keyDown = function (event) {
  if (event.key === "Enter") {
    display();
  }
};
