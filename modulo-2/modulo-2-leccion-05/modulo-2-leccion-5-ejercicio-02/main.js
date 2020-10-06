"use strict";

const button = document.querySelector(".button");

function hi() {
  const name = document.querySelector(".name").value;
  const welcome = document.querySelector(".welcome");
  return (welcome.innerHTML = `Hola ${name}`);
}

button.addEventListener("click", hi);
