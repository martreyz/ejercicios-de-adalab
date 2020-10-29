"use strict";

const time = document.querySelector(".time");
const stopButton = document.querySelector(".stop");
const restartButton = document.querySelector(".restart");

let counter = 0;
let timer;
function incrementCounter() {
  counter += 1;
  time.innerHTML = counter;
}

timer = setInterval(incrementCounter, 1000);

function stopCounter() {
  clearInterval(timer);
}

stopButton.addEventListener("click", stopCounter);

function restartCounter() {
  timer = setInterval(incrementCounter, 1000);
}

restartButton.addEventListener("click", restartCounter);
