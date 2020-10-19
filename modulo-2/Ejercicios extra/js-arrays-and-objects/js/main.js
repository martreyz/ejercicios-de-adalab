"use strict";

const promos = [
  {
    promo: "A",
    name: "Ada",
    students: [
      {
        id: "id-1",
        name: "Sofía",
        age: 20,
      },
      {
        id: "id-2",
        name: "María",
        age: 21,
      },
      {
        id: "id-3",
        name: "Lucía",
        age: 22,
      },
    ],
  },
  {
    promo: "B",
    name: "Borg",
    students: [
      {
        id: "id-4",
        name: "Julia",
        age: 23,
      },
      {
        id: "id-5",
        name: "Tania",
        age: 24,
      },
      {
        id: "id-6",
        name: "Alaia",
        age: 25,
      },
    ],
  },
  {
    promo: "C",
    name: "Clarke",
    students: [
      {
        id: "id-7",
        name: "Lidia",
        age: 26,
      },
      {
        id: "id-8",
        name: "Celia",
        age: 27,
      },
      {
        id: "id-9",
        name: "Nadia",
        age: 28,
      },
    ],
  },
];

const studentsWorkingInGoogle = ["id-2", "id-3", "id-5", "id-9"];

// TÚ CÓDIGO AQUÍ

// const textContainer = document.querySelector(".js-result");
// let namesAcc = " ";
// for (let promoName = 0; promoName < promos.length; promoName++) {
//   namesAcc += "<li>" + promos[promoName].name + "</li>";
// }
// textContainer.innerHTML = `<ul>${namesAcc}</ul>`;

// 2

// let names2Acc = " ";
// for (let promoName = 0; promoName < promos.length; promoName++) {
//   names2Acc += `<li><p> Nombre:  ${promos[promoName].name}</p><p>Promo:  ${promos[promoName].promo}</p></li>`;
// }
// textContainer.innerHTML = `<ul>${names2Acc}</ul>`;

//3

// let names3Acc = " ";
// for (let promoName = 0; promoName < promos.length; promoName++) {
//   names3Acc += `<li><p> Nombre:  ${promos[promoName].name}</p><p>Promo:  ${promos[promoName].promo}</p><p>Número de alumnas: ${promos[promoName].students.length}</p></li>`;
// }
// textContainer.innerHTML = `<ul>${names3Acc}</ul>`;

//4

// let names4Acc = " ";
// let promName = " ";
// let studentDetails = " ";
// let totalDetails = " ";

// for (let promo4Name = 0; promo4Name < promos.length; promo4Name++) {
//   promName = promos[promo4Name].name;

//   for (
//     let promoDetI = 0;
//     promoDetI < promos[promo4Name].students.length;
//     promoDetI++
//   ) {
//     studentDetails += `<li>${promos[promo4Name].students[promoDetI].name}, ${promos[promo4Name].students[promoDetI].age}</li>`;
//   }
//   names4Acc += ` <li>
//   <p>Nombre: ${promName}</p>
//   <ul>
//     ${studentDetails}
//   </ul>
//   </li>`;
//   studentDetails = " ";
// }
// textContainer.innerHTML = `<ul>${names4Acc}</ul>`;

//5

// let names4Acc = " ";
// let promName = " ";
// let studentDetails = " ";
// let totalDetails = " ";

// for (let promo4Name = 0; promo4Name < promos.length; promo4Name++) {
//   promName = promos[promo4Name].name;

//   for (
//     let promoDetI = 0;
//     promoDetI < promos[promo4Name].students.length;
//     promoDetI++
//   ) {
//     studentDetails += `<li>${promos[promo4Name].students[promoDetI].name}, ${promos[promo4Name].students[promoDetI].age}</li>`;
//   }
//   names4Acc += ` <li>
//   <p>Nombre: ${promName}</p>
//   <ul>
//     ${studentDetails}
//   </ul>
//   </li>`;
//   studentDetails = " ";
// }
// textContainer.innerHTML = `<ul>${names4Acc}</ul>`;

// for (let i = 0; i < 10; i++) {
//   console.log("potato");
// }

// 6

// const textContainer = document.querySelector(".js-result");

// let accData = " ";
// let accDataPromos = " ";
// for (let i = 0; i < promos.length; i++) {
//   for (let stud = 0; stud < promos.length; stud++) {
//     accData += `<li id=${promos[i].students[stud].id}>${promos[i].students[stud].name}, ${promos[i].students[stud].age}</li>`;
//   }
//   accDataPromos += `<li><p>Nombre: ${promos[i].name}</p><ul>${accData}</ul></li>`;
//   accData = " ";
// }

// textContainer.innerHTML = `<ul>${accDataPromos}</ul>`;

const textContainer = document.querySelector(".js-result");

let accData = " ";
let accDataPromos = " ";
for (let i = 0; i < promos.length; i++) {
  for (let stud = 0; stud < promos.length; stud++) {
    if (promos[i].students[stud].age % 2 === 0) {
      accData += `<li id=${promos[i].students[stud].id}>${promos[i].students[stud].name}, ${promos[i].students[stud].age}</li>`;
    }
  }
  accDataPromos += `<li><p>Nombre: ${promos[i].name}</p><ul>${accData}</ul></li>`;
  accData = " ";
}

textContainer.innerHTML = `<ul>${accDataPromos}</ul>`;
