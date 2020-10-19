"use strict";

const inputText = document.querySelector(".inputText");
const textResult = document.querySelector(".js-result");

const infoLocalStorage = localStorage.getItem("name");
inputText.value = infoLocalStorage;
textResult.innerHTML = infoLocalStorage;

function cacheName() {
  const inputTextValue = inputText.value;
  textResult.innerHTML = inputTextValue;
  localStorage.setItem("name", inputTextValue);
}

inputText.addEventListener("keyup", cacheName);
