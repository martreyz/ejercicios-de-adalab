"use strict";

const isra = document.querySelector(".teacher--isra");
const tuerto = document.querySelector(".teacher--tuerto");
const nasi = document.querySelector(".teacher--nasi");

function profe(event) {
  const selectedteacher = event.currentTarget;
  if (selectedteacher.classList.contains("teacher--selected")) {
    selectedteacher.classList.remove("teacher--selected");
  } else {
    selectedteacher.classList.add("teacher--selected");
  }
  const span = selectedteacher.querySelector(".favorite");
  if (span.innerHTML === "Añadir") {
    span.innerHTML = "Quitar";
  } else {
    span.innerHTML = "Añadir";
  }
}

isra.addEventListener("click", profe);
tuerto.addEventListener("click", profe);
nasi.addEventListener("click", profe);
