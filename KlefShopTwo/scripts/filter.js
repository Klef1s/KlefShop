function pullFilter() {
  const filterBox = document.querySelectorAll(".card__item");
  document
    .querySelector(".filter__buttons")
    .addEventListener("click", (event) => {
      if (event.target.tagName !== "BUTTON") return false;

      let dataFilter = event.target.dataset["filter"];
      console.log(dataFilter);

      filterBox.forEach((elem) => {
        elem.classList.remove("hide");
        if (!elem.classList.contains(dataFilter)) {
          elem.classList.add("hide");
        }
      });
    });
}

pullFilter();
