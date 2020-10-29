"use strict";

const time = document.querySelector(".time");
const grape = document.querySelector(".grapes");

let counter = 0;
let intervalLapse;
const counterAndGrapes = () => {
  counter += 1;
  time.innerHTML = counter;
  grape.innerHTML += '<img class="img" src="../image/uva.png" alt="uva">';
  if (counter === 12) {
    clearInterval(intervalLapse);
  }
};

intervalLapse = setInterval(counterAndGrapes, 1000);
