"use strict";

const inputText = document.querySelector(".inputText");
const textResult = document.querySelector(".js-result");
const inputLast = document.querySelector(".inputLastname");

if (!!localStorage.getItem("name") && !!localStorage.getItem("lastname")) {
  inputText.value = localStorage.getItem("name");
  inputLast.value = localStorage.getItem("lastname");
  textResult.innerHTML =
    localStorage.getItem("name") + " " + localStorage.getItem("lastname");
}

function cacheName() {
  const inputTextValue = inputText.value;
  const inputLastValue = inputLast.value;
  const completeName = inputTextValue + " " + inputLastValue;
  textResult.innerHTML = completeName;
  localStorage.setItem("name", inputTextValue);
  localStorage.setItem("lastname", inputLastValue);
}

inputText.addEventListener("keyup", cacheName);
inputLast.addEventListener("keyup", cacheName);
