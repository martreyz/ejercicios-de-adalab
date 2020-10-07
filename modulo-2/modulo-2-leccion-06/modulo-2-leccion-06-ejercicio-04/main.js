"use strict";

const button = document.querySelector(".button");

function click2(event) {
  console.log(event);
}

button.addEventListener("click", click2);
