"use strict";

const text = document.querySelector(".js-text");

console.log(text.offsetHeight);
const initialHeight = text.offsetHeight;

function changeHeight() {
  const newHeight = initialHeight / 3;
  console.log(newHeight);
  text.style.height = newHeight + "px";
  console.log(text.offsetHeight);
}
changeHeight();
