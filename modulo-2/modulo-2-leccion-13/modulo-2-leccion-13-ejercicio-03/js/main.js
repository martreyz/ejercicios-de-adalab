"use strict";

const users = [
  { name: "María", isPremium: false },
  { name: "Lucía", isPremium: true },
  { name: "Susana", isPremium: true },
  { name: "Rocío", isPremium: false },
  { name: "Inmaculada", isPremium: false },
];

let welcome = "";

welcome += users
  .filter((user) => user.isPremium === true)
  .map((user) => `Bienvenida ${user.name}, gracias por confiar en nosotras!`);

welcome += users
  .filter((user) => user.isPremium === false)
  .map((user) => `Bienvenida ${user.name}`);

console.log(welcome);
