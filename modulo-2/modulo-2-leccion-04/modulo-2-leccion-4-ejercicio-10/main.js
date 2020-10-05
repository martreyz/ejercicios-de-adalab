"use strict";

const borderBox = true;
const width = 330;
const padding = 50;
const border = 3;

function box(a, b, c, d) {
  let boxTwo;
  if (a === true) {
    boxTwo = b;
  } else {
    boxTwo = b + c + d;
  }

  return (
    `El ancho del contenido es:` +
    b +
    `px y el ancho total de la caja es: ${boxTwo} px`
  );
}

const prueba = box(true, 330, 50, 3);
console.log(prueba);

const pruebaTwo = box(false, 330, 50, 3);
console.log(pruebaTwo);
