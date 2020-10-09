'use strict';

const button = document.querySelectorAll('.button');
const body = document.querySelector('body');

function click2 (event) {
  if (body.classList.contains('body')){
    body.classList.remove('body');
  } else {
body.classList.add('body');
  }
}

for (let i= 0; i<button.length; i++){
button[i].addEventListener("click", click2);
}