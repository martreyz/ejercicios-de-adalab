"use strict";

const select = document.querySelector(".js-select");
const lastnameForm = document.querySelector(".js-lastname");
const phoneForm = document.querySelector(".js-phone");

const infoUsers = [
  {
    name: "Paca",
    lastname: "Gómez",
    phone: "666999555",
  },
  {
    name: "Marta",
    lastname: "Rey",
    phone: "666999557",
  },
  {
    name: "Lucía",
    lastname: "Seixo",
    phone: "666999560",
  },
];

function autofillForm(event) {
  for (let i = 0; i < infoUsers.length; i++) {
    if (event.currentTarget.value === infoUsers[i].name) {
      lastnameForm.value = infoUsers[i].lastname;
      phoneForm.value = infoUsers[i].phone;
    }
  }
}

select.addEventListener("change", autofillForm);
