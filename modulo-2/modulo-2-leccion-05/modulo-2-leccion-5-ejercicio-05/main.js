"use strict";

function multicolor(event) {
  const body = document.querySelector("body");
  const number = event.key;
  if (number === "r") {
    body.classList.remove("purple");
    body.classList.add("red");
  } else if (number === "m") {
    body.classList.remove("red");
    body.classList.add("purple");
  }
}

window.addEventListener("keydown", multicolor);
