"use strict";

const main = document.querySelector(".main");

const tasks = [
  { name: "Recoger setas en el campo", completed: true },
  { name: "Comprar pilas", completed: true },
  { name: "Poner una lavadora de blancos", completed: true },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false,
  },
];

main.innerHTML = "<p>Hay en total " + tasks.length + " tareas.</p>";

for (let i = 0; i < tasks.length; i++) {
  main.innerHTML =
    main.innerHTML +
    '<input type="checkbox" class="checkbox"/><li class="listItem">' +
    tasks[i].name +
    "</li> ";
}

const checkbox = document.querySelectorAll(".checkbox");
const listItem = document.querySelectorAll(".listItem");

function checkCheckbox(event) {
  for (let i = 0; i < checkbox.length; i++) {
    if (checkbox[i].checked == true) {
      let prueba = listItem[i].innerHTML.strike();
      listItem[i].innerHTML = prueba;
    } else if (checkbox[i].checked == false) {
      let prueba2 = tasks[i].name;
      listItem[i].innerHTML = prueba2;
    }
  }
}

for (let i = 0; i < checkbox.length; i++) {
  checkbox[i].addEventListener("click", checkCheckbox);
}
