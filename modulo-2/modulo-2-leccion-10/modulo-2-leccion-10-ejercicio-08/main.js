"use strict";

function getEmoji() {
  fetch("https://api.rand.fun/number/integer?max=999")
    .then((response) => response.html())
    .then((data) => {
      document.querySelector(".js-result").innerHTML = data.result;
    })
    .catch((error) => console.log(`Ha sucedido un error: ${error}`));
}

document.querySelector(".js-emoji").addEventListener("click", getEmoji);
