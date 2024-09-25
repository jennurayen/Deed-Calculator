//-------------------- Java Script --------------------//
// main.js

let wrapper = document.querySelector(".wrapper");
let card = document.querySelector(".card");
let prev = document.getElementById("prev");
let next = document.getElementById("next");

next.addEventListener("click", () => {
  let widthCard = card.offsetWidth;
  wrapper.scrollLeft += widthCard;
});
prev.addEventListener("click", () => {
  let widthCard = card.offsetWidth;
  wrapper.scrollLeft -= widthCard;
});

// hero
//-------------------- Java Script --------------------//
let minuIcon = document.querySelector(".menu-icon");
let minuMenu = document.querySelector(".menu-list");

minuIcon.addEventListener("click", () => {
  if (minuMenu.classList.contains("js-menu-hide")) {
    minuIcon.innerText = "X";
    minuMenu.classList.remove("js-menu-hide");
  } else {
    minuIcon.innerText = "|||";
    minuMenu.classList.add("js-menu-hide");
  }
});
