"use strict";

const adalaber1 = {};
adalaber1.nombre = "Susana";
adalaber1.edad = 34;
adalaber1.profesion = "periodista";
adalaber1.run = (run) => console.log("Estoy corriendo");
adalaber1.runAMarathon = function (distance) {
  console.log(`Estoy corriendo un maratón de ${distance} kilómetros`);
};

console.log(adalaber1.run());
console.log(adalaber1.runAMarathon("50"));
