"use strict";

const userOne = "Susana";
const userTwo = "Marta";
const welcomeText = document.querySelector(".welcome__text");

let userName = "Susana";
userName = "Marta";

if (userName === userOne || userName === userTwo) {
  welcomeText.innerHTML = `Bienvenida ${userName}!`;
} else {
  welcomeText.innerHTML =
    "Lo siento pero el usuario que has introducido no está registrado";
}
