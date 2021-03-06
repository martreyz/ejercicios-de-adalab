"use strict";

const inception = "Inception";
const theButterFlyEffect = "The butterfly effect";
const eternalSunshineOfTheSM = "Eternal sunshine of the spotless mind";
const blueVelvet = "Blue velvet";
const split = "Split";

const button = document.querySelector(".button");
const text = document.querySelector(".text");

function pelis(event) {
  text.innerHTML = `<ul><li class="incep"> ${inception} </li> <li class="butterfly">${theButterFlyEffect} </li> <li class="eternal"> ${eternalSunshineOfTheSM} </li><li class="velvet"> ${blueVelvet} </li><li class="spl"> ${split}</li>`;
  const incep = text.querySelector(".incep");
  const butterfly = text.querySelector(".butterfly");
  const eternal = text.querySelector(".eternal");
  const velvet = text.querySelector(".velvet");
  const spl = text.querySelector(".spl");
  function click2(event) {
    const currentFilm = event.currentTarget.innerHTML;
    console.log(`El nombre de la película es ${currentFilm}`);
  }

  incep.addEventListener("click", click2);
  butterfly.addEventListener("click", click2);
  eternal.addEventListener("click", click2);
  velvet.addEventListener("click", click2);
  spl.addEventListener("click", click2);
}

button.addEventListener("click", pelis);
