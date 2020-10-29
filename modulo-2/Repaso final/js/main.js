"use strict";

const palette = document.querySelector(".palette");
const searchInput = document.querySelector(".search");

let accColors = "";
let accPalette = "";
let palettes;

function getAndPaintPalettes() {
  fetch(
    "https://beta.adalab.es/ejercicios-extra/js-ejercicio-de-paletas/data/palettes.json"
  )
    .then((result) => result.json())
    .then((data) => {
      palettes = data.palettes;
      console.log(palettes);
      paintPalettes();
      listenClick();
    });
}

function paintPalettes() {
  palette.innerHTML = "";

  for (let i = 0; i < palettes.length; i++) {
    if (
      palettes[i].name.includes(searchInput.value) ||
      palettes[i].name.includes(searchInput.value.toUpperCase())
    ) {
      for (const color of palettes[i].colors) {
        accColors += `<div class="color" style="background-color: #${color}"></div>`;
      }
      palette.innerHTML += `<li id="${i}" class="js-palette-item"><h1>${palettes[i].name}</h1>${accColors}</li>`;
      accColors = "";
    }
  }
}

searchInput.addEventListener("keyup", getAndPaintPalettes);

const favouritePalettes = [];

function markAsFavourite(event) {
  let myPaletteId = event.currentTarget.id;
  event.currentTarget.classList.toggle("selected");
  let tellMe = favouritePalettes.find((myID) => myID === myPaletteId);
  if (tellMe === undefined) {
    favouritePalettes.push(myPaletteId);
  } else if (!!tellMe === true) {
    let paletteIndex = favouritePalettes.indexOf(myPaletteId);
    favouritePalettes.splice(paletteIndex, 1);
  }
  console.log(favouritePalettes);
}

function listenClick() {
  const palettesList = document.querySelectorAll(".js-palette-item");
  for (const paletteSelected of palettesList) {
    paletteSelected.addEventListener("click", markAsFavourite);
  }
}
