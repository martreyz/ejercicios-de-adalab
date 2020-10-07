"use strict";

const button = document.querySelector(".button");

function click2(event) {
  console.dir(event);
}

button.addEventListener("click", click2);
