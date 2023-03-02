//аним.навигации
let parent_nav = document.querySelector(".nav__list");
let item_nav = parent_nav.querySelectorAll(".nav__item");

for (var i = 0; i < item_nav.length; i++) {
  item_nav[i].addEventListener("click", function (event) {
    for (var j = 0; j < item_nav.length; j++) {
      item_nav[j].classList.remove("active");
    }
    this.classList.add("active");
  });
}

//аним.сортировки
let parent_sort = document.querySelector(".sorting");
let item_sort = parent_sort.querySelectorAll(".sort__button");

for (var i = 0; i < item_sort.length; i++) {
  item_sort[i].addEventListener("click", function (event) {
    for (var j = 0; j < item_sort.length; j++) {
      item_sort[j].classList.remove("active");
    }
    this.classList.add("active");
  });
}

//
const toKorzina = document.querySelector(".korzina");
toKorzina.addEventListener("click", function () {
  document.querySelector(".cards").style.display = "none";
  document.querySelector(".container__sorting").style.display = "none";
  document.querySelector(".basket__wrapper").style.display = "flex";
});
const toMain = document.querySelector(".cars");
toMain.addEventListener("click", function () {
  document.querySelector(".cards").style.display = "grid";
  document.querySelector(".container__sorting").style.display = "block";
  document.querySelector(".basket__wrapper").style.display = "none";
});
