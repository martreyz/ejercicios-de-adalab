"use strict";

const inception = "Inception";
const theButterFlyEffect = "The butterfly effect";
const eternalSunshineOfTheSM = "Eternal sunshine of the spotless mind";
const blueVelvet = "Blue velvet";
const split = "Split";

const button = document.querySelector(".button");
const text = document.querySelector(".text");

function pelis(event) {
  text.innerHTML = `<ul class="list"><li class="incep"> ${inception} </li> <li class="butterfly">${theButterFlyEffect} </li> <li class="eternal"> ${eternalSunshineOfTheSM} </li><li class="velvet"> ${blueVelvet} </li><li class="spl"> ${split}</li>`;
  const incep = text.querySelector(".incep");
  const butterfly = text.querySelector(".butterfly");
  const eternal = text.querySelector(".eternal");
  const velvet = text.querySelector(".velvet");
  const spl = text.querySelector(".spl");
  const list = text.querySelector(".list");
  function click2(event) {
    const listtarget = event.target.innerHTML;
    console.log(`El nombre de la película es ${listtarget}`);
  }
  list.addEventListener("click", click2);
}

button.addEventListener("click", pelis);
