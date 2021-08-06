const ul = document.querySelector(".menu ul");
const svg = document.querySelector(".menu a img");
const body = document.querySelector("body");
const nav = document.querySelector(".header nav");
let state = false;
document.querySelector("#dropDown").addEventListener("click", (e) => {
  e.preventDefault();
  state = !state;
  updateImage();
});

const updateImage = () => {
  if (state) {
    svg.setAttribute("src", "./images/icon-close.svg");
    ul.classList.add("active");
    body.classList.add("active");
    nav.classList.add("active");
  } else {
    svg.setAttribute("src", "./images/icon-hamburger.svg");
    ul.classList.remove("active");
    body.classList.remove("active");
    nav.classList.remove("active");
  }
};
