"use strict";

const inputRadio = document.querySelectorAll(".js-input");

const main = document.querySelector(".main");
let theme = "light";
theme = localStorage.getItem("theme");
main.classList.add(theme);

const checkedInput = localStorage.getItem("checked");
if (checkedInput === "dark") {
  inputRadio[0].checked = true;
} else if (checkedInput === "light") {
  inputRadio[1].checked = true;
}

function setTheme(ev) {
  if (ev.currentTarget.value === "dark") {
    main.classList.remove("light");
    main.classList.add("dark");
    localStorage.setItem("theme", "dark");
    localStorage.setItem("checked", "dark");
  } else if (ev.currentTarget.value === "light") {
    main.classList.add("light");
    main.classList.remove("dark");
    localStorage.setItem("theme", "light");
    localStorage.setItem("checked", "light");
  }
}

for (const radio of inputRadio) {
  radio.addEventListener("change", setTheme);
}
