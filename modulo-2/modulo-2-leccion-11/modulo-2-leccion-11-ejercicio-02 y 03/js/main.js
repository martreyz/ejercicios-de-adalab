"use strict";

const searchInput = document.querySelector(".js-input");
const buttonInput = document.querySelector(".js-button");
const searchResult = document.querySelector(".js-result");

const peopleResults = [];

// Pongo este bucle con el fetch fuera porque si lo meto dentro de la función necesito hacer dos clicks: uno para que se cargue el contenido de las 9 páginas y otro para que lo pinte en el HTML, de esta forma se pinta nada más cargar la página y los datos están accesibles al primer click.

for (let i = 1; i < 10; i++) {
  fetch(`https://swapi.dev/api/people/?page=${i}`)
    .then((response) => response.json())
    .then((data) => {
      peopleResults.push(data.results);
    });
}

function getResult(event) {
  searchResult.innerHTML = " ";
  const searchInputValue = searchInput.value;
  for (let i = 0; i < peopleResults.length; i++) {
    for (let ind = 0; ind < peopleResults[i].length; ind++) {
      let personResultName = peopleResults[i][ind].name;
      let indexNom = personResultName.indexOf(searchInputValue);
      console.log(indexNom);
      if (indexNom !== -1) {
        searchResult.innerHTML += `<li>Nombre: ${peopleResults[i][ind].name}, Género: ${peopleResults[i][ind].gender}.</li>`;
      }
    }
  }
}

buttonInput.addEventListener("click", getResult);
