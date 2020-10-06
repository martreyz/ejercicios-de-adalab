"use strict";

function multicolor() {
  const loremtext = document.querySelector(".loremtext");
  const height = 1000;
  if (window.scrollY >= height) {
    loremtext.classList.add("loremtext-scroll");
  }
}

document.addEventListener("scroll", multicolor);
