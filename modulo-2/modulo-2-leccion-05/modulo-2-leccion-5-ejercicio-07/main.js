"use strict";

function button(event) {
  const buttonTwo = document.querySelector(".button");
  if (buttonTwo.classList.contains("button-click")) {
    buttonTwo.classList.remove("button-click");
  } else {
    buttonTwo.classList.add("button-click");
  }
}

const buttonTwo = document.querySelector(".button");
buttonTwo.addEventListener("click", button);
