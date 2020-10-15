"use strict";

const inputText = document.querySelector(".js-orgname");
const inputButton = document.querySelector(".js-button");
const resultText = document.querySelector(".js-result");

function getGitHubOrg() {
  const inputTextValue = inputText.value;
  fetch(`https://api.github.com/orgs/${inputTextValue}`)
    .then((orgsResult) => orgsResult.json())
    .then((orgsdata) => {
      const orgsDataArray = orgsdata.repos_url;
      return fetch(`${orgsDataArray}`);
    })
    .then((reporesult) => reporesult.json())
    .then((repodata) => {
      for (const repo of repodata) {
        resultText.innerHTML += `<li>${repo.name}</li>`;
      }
    });
}

inputButton.addEventListener("click", getGitHubOrg);
