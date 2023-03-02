document.querySelector("#btn-price").onclick = function () {
  sort("data-price");
};
document.querySelector("#btn-popular").onclick = function () {
  sort("data-popular");
};
document.querySelector("#btn-rating").onclick = function () {
  sort("data-rating");
};

function sort(sortType) {
  let items = document.querySelector(".cards");
  for (let i = 0; i < items.children.length; i++) {
    for (let k = i; k < items.children.length; k++) {
      if (
        +items.children[i].getAttribute(sortType) <
        +items.children[k].getAttribute(sortType)
      ) {
        replacedNode = items.replaceChild(items.children[k], items.children[i]);
        insertAfter(replacedNode, items.children[i]);
      }
    }
  }
}

function insertAfter(elem, refElem) {
  return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}
