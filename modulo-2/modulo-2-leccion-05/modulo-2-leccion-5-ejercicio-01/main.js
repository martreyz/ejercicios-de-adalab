"use strict";

const button = document.querySelector(".button");
const hi = document.querySelector(".hi");

function first(event) {
  hi.innerHTML = "Mi primer click, ¡ole yo y la mujer que me parió!";
}

button.addEventListener("click", first);
