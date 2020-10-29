"use strict";

const button = document.querySelector(".button");

function askForAsleep() {
  button.innerHTML = "¿Te has dormido?";
}

setTimeout(askForAsleep, 10000);

function restartTimeout() {
  button.innerHTML = "";
  setTimeout(askForAsleep, 10000);
}

button.addEventListener("click", restartTimeout);
