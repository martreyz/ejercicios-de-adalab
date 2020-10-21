"use strict";

const main = document.querySelector(".js-main");

for (let i = 0; i < 100; i++) {
  main.innerHTML +=
    '<p class="parr">He aprendido bien cómo funcionan los bucles</p> <select class="select" name="color" id=""><option value="pink">Pink</option><option value="yellow">Yellow</option></select>';
}

const select = document.querySelectorAll(".select");
const parr = document.querySelectorAll(".parr");

function changeColor(event) {
  if (event.currentTarget.value === "pink") {
    main.classList.add("pink");
  } else if (event.currentTarget.value === "yellow") {
    main.classList.add("yellow");
  }
}

for (const selector of select) {
  selector.addEventListener("change", changeColor);
}
