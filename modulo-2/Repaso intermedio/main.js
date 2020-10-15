'use strict';

const container = document.querySelector('.container');
const body = document.querySelector('body');
const smiley = document.querySelectorAll('.smiley');
const selector = document.querySelector('.select');
const button = document.querySelector('.button');



function color(){
  let randomNum = parseInt(Math.random() * 100);
  console.log(randomNum);
  if (randomNum % 2 !== 0){
    body.classList.add("body");
  } else {
    body.classList.remove("body");
  }
}

function click2(){
  let selectorValue = selector.value;
  container.innerHTML = selectorValue;
}

function click() {
  color();
  click2();
}

button.addEventListener("click", click);

