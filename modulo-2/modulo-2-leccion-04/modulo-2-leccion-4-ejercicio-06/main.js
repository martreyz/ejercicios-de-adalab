"use strict";

function getEl(a) {
  const result = document.querySelector(a);
  return result;
}
const main = ".maintext";
const prueba2 = getEl(main);

if (!!prueba2 === false) {
  console.error(
    `No existe ningún elemento con clase, id o tag llamado ${main}`
  );
}
