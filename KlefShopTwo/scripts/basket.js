let resultCounter = document.querySelector(".result__counter");

let basketWrapper = document.querySelector(".product__wrapper");
window.addEventListener("click", (event) => {
  let counter;

  //обнаружение + и - в корзине
  if (
    event.target.dataset.action === "plus" ||
    event.target.dataset.action === "minus"
  ) {
    const counterWrapper = event.target.closest(".counter");

    counter = counterWrapper.querySelector("[data-counter]");
  }

  //увеличение числа на 1
  if (event.target.dataset.action === "plus") {
    counter.innerText = ++counter.innerText;
  }

  //уменьшение числа на 1
  if (event.target.dataset.action === "minus") {
    if (parseInt(counter.innerText) > 1) {
      counter.innerText = --counter.innerText;
    } else if (
      event.target.closest(".product") &&
      parseInt(counter.innerText) === 1
    ) {
      event.target.closest(".product").remove();
      //вызов функций

      calcBinPrice();
      resultCounter.innerText = basketWrapper.children.length;
    }
  }

  //подсчет суммы только в корзине
  if (
    event.target.hasAttribute("data-action") &&
    event.target.closest(".basket__wrapper")
  ) {
    calcBinPrice();
  }

  if (event.target.hasAttribute("data-remove")) {
    event.target.closest(".product").remove();
    calcBinPrice();
  }
});
function calcBinPrice() {
  const binItems = document.querySelectorAll(".product");

  const totalPriceEl = document.querySelector(".result__final-price");

  let priceTotal = 0;

  binItems.forEach(function (item) {
    const amountEl = item.querySelector("[data-counter]");
    const priceEl = item.querySelector(".totalPrice");

    const currentPrice =
      parseInt(amountEl.innerText) * parseInt(priceEl.innerText);

    priceTotal += currentPrice;
  });

  let num = priceTotal;
  console.log(num);
  let numFormat = new Intl.NumberFormat("ru-Ru").format(num);

  totalPriceEl.innerText = numFormat;
}

window.addEventListener("click", (event) => {
  if (event.target.hasAttribute("data-addBasket")) {
    let cardCar = event.target.closest(".card__item");
    const param = {
      id: cardCar.querySelector("[data-id]"),
      // img: cardCar.querySelector(".car__image").getAttribute("data-img"),
      title: cardCar.querySelector(".item__title").innerText,
      price: cardCar.querySelector(".item__price").innerText,
      InnerPrice: cardCar.querySelector("[data-price]").innerText,
      counter: cardCar.querySelector("[data-counter]").innerText,
    };

    const itemInBin = basketWrapper.querySelector(`[data-id="${param.id}"]`);

    if (itemInBin) {
      const counterEl = itemInBin.querySelector("[data-counter]");
      counterEl.innerText =
        parseInt(counterEl.innerText) + parseInt(param.counter);
    } else {
      const binItemHtml = `
      <div class="card product">
      <div class="picture">
        <img src="${param.img}" />
      </div>
      <div class="product__content">
        <div class="product__text">
          <p class="text model">${param.title}</p>
          <p class="text price">${param.price}</p>
        </div>

        <div class="product__button">
          <button class="btn__delete">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
              height="25"
              width="25"
            >
              <path
                fill="#ff3838"
                d="M8.78842 5.03866C8.86656 4.96052 8.97254 4.91663 9.08305 4.91663H11.4164C11.5269 4.91663 11.6329 4.96052 11.711 5.03866C11.7892 5.11681 11.833 5.22279 11.833 5.33329V5.74939H8.66638V5.33329C8.66638 5.22279 8.71028 5.11681 8.78842 5.03866ZM7.16638 5.74939V5.33329C7.16638 4.82496 7.36832 4.33745 7.72776 3.978C8.08721 3.61856 8.57472 3.41663 9.08305 3.41663H11.4164C11.9247 3.41663 12.4122 3.61856 12.7717 3.978C13.1311 4.33745 13.333 4.82496 13.333 5.33329V5.74939H15.5C15.9142 5.74939 16.25 6.08518 16.25 6.49939C16.25 6.9136 15.9142 7.24939 15.5 7.24939H15.0105L14.2492 14.7095C14.2382 15.2023 14.0377 15.6726 13.6883 16.0219C13.3289 16.3814 12.8414 16.5833 12.333 16.5833H8.16638C7.65805 16.5833 7.17054 16.3814 6.81109 16.0219C6.46176 15.6726 6.2612 15.2023 6.25019 14.7095L5.48896 7.24939H5C4.58579 7.24939 4.25 6.9136 4.25 6.49939C4.25 6.08518 4.58579 5.74939 5 5.74939H6.16667H7.16638ZM7.91638 7.24996H12.583H13.5026L12.7536 14.5905C12.751 14.6158 12.7497 14.6412 12.7497 14.6666C12.7497 14.7771 12.7058 14.8831 12.6277 14.9613C12.5495 15.0394 12.4436 15.0833 12.333 15.0833H8.16638C8.05588 15.0833 7.94989 15.0394 7.87175 14.9613C7.79361 14.8831 7.74972 14.7771 7.74972 14.6666C7.74972 14.6412 7.74842 14.6158 7.74584 14.5905L6.99681 7.24996H7.91638Z"
                clip-rule="evenodd"
                fill-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div class="counter">
        <div class="counter__btn" id="btn__minus" data-action="minus">
          <img src="../img/minus.svg" />
        </div>
        <p class="counter__text" data-counter>${param.counter}</p>
        <div class="counter__btn" id="btn__plus" data-action="plus">
          <img src="../img/plus.svg" />
        </div>
      </div>
      <div data-price class="totalPrice" style="display: none">${param.InnerPrice}</div>
    </div>
`;

      basketWrapper.insertAdjacentHTML("beforeend", binItemHtml);
    }
    calcBinPrice();

    resultCounter.innerText = basketWrapper.children.length;
  }
});

const paymentHtml = ``;
