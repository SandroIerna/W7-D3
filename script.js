let row = document.getElementById("row");

async function fetchBooksAPI(url) {
  let response = await fetch(url);
  let booksArray = await response.json();
  console.log(booksArray);
  booksArray.forEach((book) => {
    row.innerHTML += `<div class="col-3">
        <div class="card">
          <img src="${book.img}" class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">
              ${book.title}
            </p>
            <div class="d-flex justify-content-between">
              <button type="button" class="btn btn-secondary add-to-cart">
                Add to Cart
              </button>
              <button type="button" class="btn btn-secondary skip">
                Skip
              </button>
            </div>
          </div>
        </div>
      </div>`;
  });
}
fetchBooksAPI("https://striveschool-api.herokuapp.com/books");
