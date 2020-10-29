"use strict";

const text = document.querySelector(".text");

let counter = 0;
const setTimeWritten = () => {
  counter += 1;
  text.innerHTML = `Post escrito hace ${counter} segundos`;
  if (counter >= 60) {
    text.innerHTML = `Post escrito hace 1 minuto`;
  }
};

setInterval(setTimeWritten, 1000);
