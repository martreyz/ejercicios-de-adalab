"use strict";

const adalaber1 = {};
adalaber1.nombre = "Susana";
adalaber1.edad = 34;
adalaber1.profesion = "periodista";
adalaber1.showBio = function () {
  return (
    "Mi nombre es " +
    this.nombre +
    ", tengo " +
    this.edad +
    " años, y soy " +
    this.profesion
  );
};

const adalaber2 = {};
adalaber2.nombre = "Rocío";
adalaber2.edad = 25;
adalaber2.profesion = "actriz";
adalaber2.showBio = function () {
  return (
    "Mi nombre es " +
    this.nombre +
    ", tengo " +
    this.edad +
    " años, y soy " +
    this.profesion
  );
};
