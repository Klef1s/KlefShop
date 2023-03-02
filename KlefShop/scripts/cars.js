const cars = {
  m8_coupe: {
    id: 1,
    model: "BMW M8 Coupe",
    fuel: "Бензин",
    price: "Цена от 14 570 000 ₽",
    img: "https://cosystatic.bmwgroup.com/bmwweb/cosySec?COSY-EU-100-2545xM4RIyFnbm9Mb3AgyyIJrjG0suyJRBODlsrjGpuaprQbhSIqppglBgR5HJl384MlficYiGHqoQxYLW7%25f3tiJ0PCJirQbLDWcQW7%251u2DJqoQh47wMvcYi967rfMb3islBglUbv8cRScHJwzMbnMdo13yJGy536nrQ%25r9RXHW8zWuEUQqogqaFQ8l3ilUj80cRScH7e7MbnMd0zqyJGy5BOKrQ%25r9Yp9W8zWunJHqogqaGQFl3ilU%25FjcRScHzjgMbnMdgsSyJGy5ic0rQ%25r9snYW8zWuKbGqogqaDJKl3ilUCQIcRScH4%25bMbnMdJmSyJGy5Q3drQ%25r98R9W8zWuobSqogqa3GIl3ilUR%25gcRScHbU8MbnMdJbkyJGy5Q4ErQ%25r993nW8zWuu3HqogqaaUbl3ilUUvmcRScHHwoMbnMddVHyJGy55OQrQbBUq2rjGTSFhrQb9%25cQSW7%25IER8MI8YHQA",
    select_img:
      "https://cosystatic.bmwgroup.com/bmwweb/cosySec?COSY-EU-100-2545xM4RIyFnbg9Mb3AgyyIJrjG03uyJRBODlsrjGpuaprQbhSIqppglBgR5HJl384MlficYiJUdl38hEXq0zkRNSQBL4QSW8JXCqM8q0zAatCQl38Te0VywMESu10WkyJRhlBg3aHd5cRo6W7%25cRiFCd5cRokW7%258uaUW8JwDJrjGQcRo1W7%25suaUW8JGCyFny58ORrQ%25r9opSW8zWubtJqogqaJ2zl3ilUQT9cRScH753MbnMd03RyJGy5BRErQ%25r9YKYW8zWuESMqogqaFk4l3ilUjvUcRScHzo9MbnMdg30yJGy5i0BrQ%25r9SBnW8zWunC%25qogqaGrEl3ilUCzjcRScH48gMbnMdeo4yJGy5m3ArQ%25r9si8W8zWuoD%25qogqa3Jul3ilURQUcRScHb8%25MbnMdJgAyJGy5QinrQ%25r985RW8zWuo8Vqogqa3s7l3ilUUJzcRScHHJ9MbnMdd58yJGy55ODrQ%25r99pbW8zWuuf9qogqaak3l38F5MIlBgL%250Pl38Uir3%25cYiA7QRWARj93N",
    data_price: "14570000",
    data_popular: "76",
    data_rating: "8",
  },
  m4_coupe: {
    id: 2,
    model: "BMW M4 Coupe",
    fuel: "Бензин",
    price: "Цена от 9 000 000 ₽",
    img: "https://cosystatic.bmwgroup.com/bmwweb/cosySec?COSY-EU-100-2545xM4RIyFnbm9Mb3AgyyIJrjG0suyJRBODlsrjGpuaprQbhSIqppglBgoRJNl384MlficYiGHqoQxYLW7%25f3tiJ0PCJirQbLDWcQW7%251u2Y6qoQh47wMvcYi967AVMb3islBglUQdZcRScHzwgMbnMdQVJyJGy58OUrQ%25r9op8W8zWubFHqogqaJNQl3ilUQtgcRScH8ZuMbnMdoPdyJGy5BRbrQ%25r9YpaW8zWuEfuqogqaGjdl3ilU%257QcRScHzjzMbnMdgl7yJGy5iJdrQ%25r9saYW8zWuKG%25qogqaDJel3ilUCQzcRScH48PMbnMdJoHyJGy5Q35rQ%25r98RiW8zWuon%25qogqa3GIl3ilUR3pcRScHbDBMbnMdJfgyJGy55uRrQ%25r993nW8zWuu3HqogqaaU4l3ilUUvacRScHFauMbnMdjUzyJGy5765rQbBUq2rjGTSFhrQb9%25cQSW7%25IER8MI8YHQA",
    select_img:
      "https://cosystatic.bmwgroup.com/bmwweb/cosySec?COSY-EU-100-2545xM4RIyFnbg9Mb3AgyyIJrjG03uyJRBODlsrjGpuaprQbhSIqppglBgoRJNl384MlficYiJUdl38hEXq0zkRNSQBL4QSW8JXCqM8q0zAatE1l38Te0VywMESu102OyJRhlBg3aHd5cRo6W7%25cRiFCd5cRokW7%258uaUW8JwDJrjGQcRo1W7%25suaUW8JGCyFny53uXrQ%25r9SpnW8zWu3foqogqaRk5l3ilUbvRcRScH809MbnMdo13yJGy536nrQ%25r9RXHW8zWubxuqogqaFQ8l3ilUjvdcRScH7wHMbnMdgBuyJGy5iY3rQ%25r9SBSW8zWunyYqogqaGoul3ilUCdjcRScH4giMbnMdeoKyJGy5m3SrQ%25r9sRxW8zWuob9qogqa3Jal3ilURQGcRScHbziMbnMdJgAyJGy5QJvrQ%25r98eFW8zWuownqogqaaHQl3ilUUJzcRScHHJ9MbnMdd5syJGy55OdrQ%25r90dHW8zWuB5SqogqaY2al38F5MIlBgL%250Pl38Uir3%25cYiA7QRWARj93N",
    data_price: "9000000",
    data_popular: "70",
    data_rating: "6",
  },
  m5_competition: {
    id: 3,
    model: "BMW M5 Competition",
    fuel: "Бензин",
    price: "Цена от 11 450 000 ₽",
    img: "https://cosystatic.bmwgroup.com/bmwweb/cosySec?COSY-EU-100-2545xM4RIyFnbm9Mb3AgyyIJrjG0suyJRBODlsrjGpuaprQbhSIqppglBgBRGDl384MlficYiGHqoQxYLW7%25f3tiJ0PCJirQbLDWcQW7%251u2aSqoQh47wMvcYi9678sMb3islBglUQt9cRScH8oBMbnMdQV3yJGy55ORrQ%25r9sRnW8zWuKbtqogqaGjJl3ilU%25tjcRScH48CMbnMdezJyJGy558arQ%25r99pCW8zWuuD%25qogqaFkal3ilUjvFcRScH8UjMbnMdoPiyJGy53LUrQ%25r9tErQ%25r9SvfW8zWunmbqogqaGrEl3ilU%2539cRScHzmiMbnMdg43yJGy5isErQ%25r9RnYW8zWunD4qogqaGkQl3ilU%25KBcRScHzoBMbnMdJCYyJGy5QiErQ%25r985RW8zWuo8Mqogqa3bdl3ilURKjcRScHb8%25MbnMdJoHyJGy5Q35rQ%25r9oSjW8zWuERRqogqaFQ8l3ilUj80cRScH7%25WMbnMdgQsyJGy5m9KrQ%25r99QsW8zWuunrqogqaGQFl3ilURK%25cRScHFm8MbnMdj9syJGy57SbrQ%25r90tjW8zWuBAuqoQEdcNq0zPG7ZqoQagyoGlBg1jJ3r13F5ot",
    select_img:
      "https://cosystatic.bmwgroup.com/bmwweb/cosySec?COSY-EU-100-2545xM4RIyFnbg9Mb3AgyyIJrjG03uyJRBODlsrjGpuaprQbhSIqppglBgBRGDl384MlficYiJUdl38hEXq0zkRNSQBL4QSW8JXCqM8q0zAatUnl38Te0VywMESu10oKyJRhlBg3aHd5cRo6W7%25cRiFCd5cRokW7%258uaUW8JwDJrjGQcRo1W7%25suaUW8JGCyFny536UrQ%25r9RbFW8zWu3fJqogqaakQl3ilUCQzcRScH486MbnMdgBoyJGy5i6BrQ%25r9sRmW8zWuKSoqogqaaRdl3ilUUvmcRScHHeiMbnMd0VdyJGy5BO0rQ%25r9R5BW8zWubxGqogqaJh5l3ilU67l3ilU%25OwcRScHzD8MbnMdgl7yJGy5iJUrQ%25r9SDGW8zWunsJqogqaGC7l3ilUQzjcRScHzesMbnMdgV3yJGy5i4FrQ%25r9SbFW8zWuomjqogqa3G7l3ilURaQcRScHbRWMbnMdJ8uyJGy5Q4BrQ%25r98RiW8zWuob9qogqa3Jal3ilUb%25BcRScH7QQMbnMd03RyJGy5BRErQ%25r9YicW8zWun3CqogqaDU4l3ilUU3CcRScHHzlMbnMdg30yJGy5Q4irQ%25r90DRW8zWuBUCqogqaY%258l3ilUE6BcRScHFNHMb37ur1MESxgYXMb3dnqbgyFntBoJltJ0ab6",
    data_price: "11450000",
    data_popular: "80",
    data_rating: "8",
  },
  ix_m60: {
    id: 4,
    model: "BMW iX M60",
    fuel: "Электрический",
    price: "Цена от 12 930 000 ₽",
    img: "https://cosystatic.bmwgroup.com/bmwweb/cosySec?COSY-EU-100-2545xM4RIyFnbm9Mb3AgyyIJrjG0suyJRBODlsrjGpua8rQbhSIqppglBgERGal384MlficYiGHqoQxYLW7%25f3tiJ0PCJirQbLDWcQW7%251uSFoqoQh47wMvcYi9M%25CoMb3islBglUbuZcRSrQdr9SbbW8zcRacH8g7MbnW85WubxKqogMbUMdoPEyJGqo9qaFbel3iyJHy5BRbrQ%25l3ulUj80cRSrQdr9YEUW8zcRacH715MbnW85WunUUqogMbUMdgmYyJGqo9qaG4zl3iyJHy5i3RrQ%25l3ulU%25awcRSrQdr9SmnW8zcRacHzRuMbnW85Wun87qogMbUMdgPoyJGqo9qaDJKl3iyJHy5m3ArQ%25l3ulUCGpcRSrQdr98KGW8zcRacHbziMbnW85Wuo9bqogMbUMdJbtyJGqo9qa3s7l3iyJHy5Q4urQbBUq2rjGTSFhrQb9%25cQSW7%25IER8MI8YHQA",
    select_img:
      "https://cosystatic.bmwgroup.com/bmwweb/cosySec?COSY-EU-100-2545xM4RIyFnbg9Mb3AgyyIJrjG03uyJRBODlsrjGpua8rQbhSIqppglBgERGal384MlficYiJUdl38hEXq0zkRNSQBL4QSW8JXCqM8q0zAanj3l38Te0VywMESuyz43yJRhlBg3aHd5cRo6W7%25cRiFCd5cRokW7%258uaUW8JwDJrjGQcRo1W7%25suaUW8JGCyFny58HXrQ%25l3ulU%2588cRSrQdr9RnYW8zcRacH8Z4MbnW85Wubx7qogMbUMd08KyJGqo9qaFQ8l3iyJHy5BRErQ%25l3ulUj75cRSrQdr9YtaW8zcRacHz55MbnW85WunDjqogMbUMdgsSyJGqo9qaGJQl3iyJHy5idprQ%25l3ulU%25DzcRSrQdr9SQHW8zcRacHzRYMbnW85WunxbqogMbUMdeo4yJGqo9qaDJNl3iyJHy5mgvrQ%25l3ulUR4gcRSrQdr98SGW8zcRacHbU8MbnW85Wuo86qogMbUMdJCYyJGqo9qa3sHl38F5MIlBgL%250Pl38Uir3%25cYiA7QRWARj93N",
    data_price: "12930000",
    data_popular: "60",
    data_rating: "7",
  },
  series_3: {
    id: 5,
    model: "BMW 3 серии",
    fuel: "Бензин • Дизель",
    price: "Цена от 3 930 000 ₽",
    img: "https://cosystatic.bmwgroup.com/bmwweb/cosySec?COSY-EU-100-2545xM4RIyFnbm9Mb3AgyyIJrjG0suyJRBODlsrjGpuaprQbhSIqppglBgUnQJl384MlficYiGHqoQxYLW7%25f3tiJ0PCJirQbLDWcQW7%251uSFbqoQh47wMvcYi9InwJMb3islBglUbbQcRScHJ66MbnMdom0yJGy53JmrQ%25r9R1HW8zWubxdqogqaJhDl3ilUjJJcRScH7o3MbnMd03YyJGy5BsBrQ%25r9YicW8zWunJEqogqaGC7l3ilU%25awcRScHzCuMbnMdgA0yJGy5msbrQ%25r9sRnW8zWuKbMqogqaDnvl3ilURFjcRScHb8UMb37ur1MESxgYXMb3dnqbgyFntBoJltJ0ab6",
    select_img:
      "https://cosystatic.bmwgroup.com/bmwweb/cosySec?COSY-EU-100-2545xM4RIyFnbg9Mb3AgyyIJrjG03uyJRBODlsrjGpuaprQbhSIqppglBgKjbJl384MlficYiJUdl38hEXq0zkRNSQBL4QSW8JXCqM8q0zAanjJl38Te0VywMESuv8b2yJRhlBg3aHd5cRo6W7%25cRiFCd5cRokW7%258uaUW8JwDJrjGQcRo1W7%25suaUW8JGCyFny5izgrQ%25l3ulUbI1cRSrQdr9oSHW8zcRacH8g7MbnW85Wub8KqogMbUMdoISyJGqo9qaJ25l3iyJHy53LUrQ%25l3ulUQTUcRSrQdr9YaJW8zcRacH7QQMbnW85WuEJQqogMbUMd0%253yJGqo9qaGH7l3iyJHy5iRBrQ%25l3ulU%2575cRSrQdr9SERW8zcRacHzesMbnW85Wun3CqogMbUMdg7oyJGqo9qaGEFl3iyJHy5iKErQ%25l3ulU%25QpcRSrQdr9SmbW8zcRacHzDYMbnW85WuKF%25qogMbUMdeB8yJGqo9qaD%25Fl3iyJHy5m33rQ%25l3ulUCQzcRSrQdr9sRNW8zcRacH48jMbnW85WuKbsqogMbUMdeo1yJGqo9qaDn%25l3iyJHy5mgQrQ%25l3ulURJ5cRSrQdr98BYW8zcRacHb8UMbnW85WuobuqogMbUMdJozyJGqo9qa3Jvl3iyJHy5Q3QrQ%25l3ulURQ6cRSrQdr98StW8zcRacHbzBMbnW85Wuo9hqogMbUMdJbkyJGqo9qa3s7l3iyJHy5Q4BrQ%25l3ulURO8cRSrQdr98vSW8zcRacHHQ9MbnW85WuuRCqogMbUMddQuyJGqo9qaaU4l3iyJHy5525rQbBUq2rjGTSFhrQb9%25cQSW7%25IER8MI8YHQA",
    data_price: "3930000",
    data_popular: "55",
    data_rating: "6",
  },
};

let cards = document.querySelector(".cards");

for (let j in cars) {
  let _id = cars[j]["id"];
  let _model = cars[j]["model"];
  let _fuel = cars[j]["fuel"];
  let _price = cars[j]["price"];
  let _img = cars[j]["img"];
  let _data_price = cars[j]["data_price"];
  let _data_popular = cars[j]["data_popular"];
  let _data_rating = cars[j]["data_rating"];

  let html_cards = `<div class="card__item" data-idModal="${j}" data-id="${_id}" data-price="${_data_price}" data-popular="${_data_popular}" data-rating="${_data_rating}" data-counter="1">
  <img class="item__img" src="${_img}"/>
  <div class="item__info">
    <p class="item__text item__title">${_model}</p>
    <p class="item__text item__engine__type">${_fuel}</p>
    <p class="item__text item__price">${_price}</p>
  </div>
    </div>`;

  cards.insertAdjacentHTML("beforeend", html_cards);
}

//попап машины
let modal = document.querySelector(".popup");

let card = document.querySelectorAll(".card__item");
card.forEach((btn) => {
  btn.addEventListener("click", () => {
    let select_car = btn.getAttribute("data-idModal");
    document.querySelector("#modal").checked = true;
    let html_modal = `<div class="wrapper"><div class="popup__container" >
    <label class="popup__close" for="modal">
      <img src="..//img/cross.svg" />
    </label>
    <div class="popup__picture">
      <img
        class="car__image"
        src="${cars[select_car].select_img}"
        data-img="${cars[select_car].img}"
      />
    </div>
    <div class="popup__content">
      <div class="content items">
        <p class="items popup__item__title">${cars[select_car].model}</p>
        <p class="items popup__item__engine__type">${cars[select_car].fuel}</p>
        <p class="items popup__item__price">${cars[select_car].price}</p>
        <button class="button more">Подробнее</button>
      </div>
      <div class="content item_button">
        <img src="../img/korzina.svg" />
        <button class="button basket" data-addBasket data-id="${cars[select_car].id}">В корзину</button>
      </div>
      <div class="content"></div>
    </div>
  </div></div>`;
    modal.innerHTML = html_modal;
  });
});
