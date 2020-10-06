"use strict";
const buttonOne = document.querySelector(".button");
const buttonTwo = document.querySelector(".button2");

function button(event) {
  const selectedButton = event.currentTarget;
  if (selectedButton.classList.contains("button-click")) {
    selectedButton.classList.remove("button-click");
  } else {
    selectedButton.classList.add("button-click");
  }
}
buttonOne.addEventListener("click", button);
buttonTwo.addEventListener("click", button);
