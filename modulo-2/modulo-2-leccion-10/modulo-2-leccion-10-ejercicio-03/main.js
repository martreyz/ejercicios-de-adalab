"use strict";

const textInput = document.querySelector(".js-textInput");
const buttonInput = document.querySelector(".js-buttonInput");
const resultPar = document.querySelector(".js-result");

function getGitHubInfo() {
  const textInputValue = textInput.value;
  console.log(textInputValue);
  fetch(`https://api.github.com/users/${textInputValue}`)
    .then((response) => response.json())
    .then((data) => {
      resultPar.innerHTML = `Nombre: ${data.name}. Número de repositorios públicos: ${data.public_repos}`;
      const imgResult = document.querySelector(".js-img");
      imgResult.src = data.avatar_url;
      imgResult.alt = `Avatar del usuario ${textInputValue}`;
    });
}

buttonInput.addEventListener("click", getGitHubInfo);
