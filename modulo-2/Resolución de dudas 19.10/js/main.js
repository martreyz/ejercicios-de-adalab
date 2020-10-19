"use strict";

const inputScreen = document.querySelector(".js-number");
const keyboard = document.querySelector(".js-keyboard");

for (let i = 0; i < 10; i++) {
  keyboard.innerHTML += `<input type="button" value="${i}" class="js-key js-key${i} js-keynumber">`;
}

keyboard.innerHTML += `<input type="button" value="+" class="js-key js-keysum">`;
keyboard.innerHTML += `<input type="button" value="-" class="js-key js-keyrest">`;
keyboard.innerHTML += `<input type="button" value="=" class="js-key js-keyequal">`;
keyboard.innerHTML += `<input type="button" value="C" class="js-key js-keyreset">`;

const keys = document.querySelectorAll(".js-key");
let firstResult = " ";
let secondResult = " ";
let operator = " ";

function useCalculator(event) {
  let keyValue = event.currentTarget.value;
  if (event.currentTarget.classList.contains("js-keynumber")) {
    inputScreen.value += keyValue;
  } else if (event.currentTarget.classList.contains("js-keysum")) {
    firstResult = parseInt(inputScreen.value);
    operator = "+";
    inputScreen.value = " ";
  } else if (event.currentTarget.classList.contains("js-keyrest")) {
    firstResult = parseInt(inputScreen.value);
    operator = "-";
    inputScreen.value = " ";
  } else if (event.currentTarget.classList.contains("js-keyequal")) {
    secondResult = parseInt(inputScreen.value);
    console.log(firstResult + operator + secondResult);
    if (operator === "+") {
      inputScreen.value = firstResult + secondResult;
    } else if (operator === "-") {
      inputScreen.value = firstResult - secondResult;
    }
  } else {
    inputScreen.value = " ";
  }
}

for (let i = 0; i < keys.length; i++) {
  keys[i].addEventListener("click", useCalculator);
}
