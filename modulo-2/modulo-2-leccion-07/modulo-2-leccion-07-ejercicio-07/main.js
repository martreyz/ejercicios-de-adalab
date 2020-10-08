"use strict";

const adalabers = [
  {
    name: "María",
    age: 29,
    proffesion: "diseñadora",
  },
  {
    name: "Lucía",
    age: 31,
    proffesion: "ingeniera química",
  },
  {
    name: "Susana",
    age: 34,
    proffesion: "periodista",
  },
  {
    name: "Rocío",
    age: 25,
    proffesion: "actriz",
  },
  {
    name: "Inmaculada",
    age: 21,
    proffesion: "diseñadora",
  },
];

function countAdalabers() {
  console.log(adalabers.length);
}
countAdalabers();

let acc = 0;
function averageAge() {
  for (let i = 0; i < adalabers.length; i++) {
    acc += adalabers[i].age;
  }
  console.log("La media de edad es de: " + acc / adalabers.length);
}
averageAge();

let youngest = 0;
let minAge = 99;
let youngestName;
function theYoungest() {
  for (let i = 0; i < adalabers.length; i++) {
    if (adalabers[i].age < minAge) {
      minAge = adalabers[i].age;
      youngest = i;
      youngestName = adalabers[youngest].name;
    }
  }

  console.log("La adalaber más joven de la lista es: " + youngestName);
}
theYoungest();

let prof = 0;
function countDesigners() {
  for (let i = 0; i < adalabers.length; i++) {
    if (adalabers[i].proffesion === "diseñadora") {
      prof += 1;
    }
  }
  console.log(`El número de diseñadoras es ${prof}`);
}
countDesigners();
