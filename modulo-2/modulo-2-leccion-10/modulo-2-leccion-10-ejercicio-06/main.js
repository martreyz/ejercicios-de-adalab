"use strict";

const button = document.querySelector(".js-button");
const randomIMG = document.querySelector(".js-randomimg");
const randomNumber = document.querySelector(".js-randomnumber");
const dogs = [];
let indexDog;

function getDogsList() {
  fetch(`https://dog.ceo/api/breeds/list/all`)
    .then((result) => result.json())
    .then((data) => {
      for (const dog in data.message) {
        dogs.push(dog);
      }
      return fetch(`https://api.rand.fun/number/integer?max=${dogs.length}`);
    })
    .then((response) => response.json())
    .then((numberdata) => {
      indexDog = numberdata.result;
      return fetch(
        `https://dog.ceo/api/breed/${dogs[numberdata.result]}/images/random`
      );
    })
    .then((imagresult) => imagresult.json())
    .then((imagdata) => {
      randomNumber.innerHTML = `La raza de perro elegida al azar ha sido ${dogs[indexDog]}`;
      randomIMG.src = imagdata.message;
      randomIMG.alt = "Imagen perrete";
    });
}

button.addEventListener("click", getDogsList);
