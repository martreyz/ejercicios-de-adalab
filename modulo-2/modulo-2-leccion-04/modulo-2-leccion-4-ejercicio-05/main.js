"use strict";

function getEl(a) {
  const result = document.querySelector(a);
  return result;
}

const prueba = getEl(".btn");
prueba.innerHTML = "holi qué ase";
