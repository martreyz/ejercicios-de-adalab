"use strict";
const recipe = document.querySelector(".recipe");
let ingredient = "";
ingredient = "Espinacas";
if (ingredient === "Pollo") {
  recipe.innerHTML = `Tu ingrediente es ${ingredient}. Puedes freirte un filete con patatas.`;
} else if (ingredient === "Merluza") {
  recipe.innerHTML = `Tu ingrediente es ${ingredient}. Puedes hacer una merlucita en salsa verde.`;
} else if (ingredient === "Espinacas") {
  recipe.innerHTML = `Tu ingrediente es ${ingredient}. Puedes hacer espinacas rehogadas.`;
} else {
  recipe.innerHTML = "Nada en la nevera";
}
