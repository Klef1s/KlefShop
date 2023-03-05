let cards = document.querySelector(".cards");

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((json) => showProduct(json));

function showProduct(json) {
  let allProducts = json.products;

  for (const product of allProducts) {
    let html_cards = `<div class="card__item ${product.category} all" data-idModal="${product.id}" data-id="${product.id}" data-price="${product.price}" 
    data-popular="${product.stock}" data-rating="${product.rating}">
    <div class="img__container">
    <img class="item__img" src="${product["images"][0]}"/>
    </div>
    <div class="item__info">
      <p class="item__text item__title">${product.title}</p>
      <p class="item__text item__engine__type">${product.brand}</p>
      <p class="item__text item__price">$${product.price}</p>
      <p data-price style="display: none">${product.price}</p>
      <p style="display: none" data-counter>1</p>
    </div>
    <button class="btn__add" data-addBasket data-id="${product.id}">Добавить</button>
      </div>`;

    cards.insertAdjacentHTML("beforeend", html_cards);
    pullFilter();
    //попап карточек
  }
}
