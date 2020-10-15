'use strict';

const preview = document.querySelector('.js-preview');
const tbody = document.querySelector('.js-tbody');

const buttonCart = document.querySelectorAll('.js-buttoncart');

const infoProduct1 = {
  name: "Node JS",
  price: 16,
  imgUrl: "./camiseta.jpg",
  units: 0
}

const infoProduct2 = {
  name: "JavaScript",
  price: 15,
  imgUrl: "./camiseta.jpg",
  units: 2
}

const infoProduct3 = {
  name: "React JS",
  price: 12,
  imgUrl: "./camiseta.jpg",
  units: 3
}

function genHTMLCode(product){
  return `<article class="preview__article">
          <img class="preview__article-img" src="${product.imgUrl}" alt="Camiseta ${product.name}" title="Camiseta ${product.name}">
          <h2 class="preview__article-title js-articlename">${product.name}</h2>
          <p class="preview__article-price js-articleprice">${product.price}€</p>
          <button type="button" class="preview__article-button">Añadir a la cesta</button>
          </article>`
}

function paintProducts () {
  const product1 = genHTMLCode(infoProduct1);
  const product2 = genHTMLCode(infoProduct2);
  const product3 = genHTMLCode(infoProduct3);
  preview.innerHTML = preview.innerHTML + product1 + product2 + product3;
}

paintProducts();

function getBasketItems (product){
  let totalPrice = product.price * product.units;
  return ` <tr>
            <td>${product.name}</td>
            <td>${product.price},00</td>
            <td><button class="js-buttoncartdec js-buttoncart card__btn">-</button> ${product.units} <button class="js-buttoncartinc js-buttoncart card__btn">+</button></td>
            <td>${totalPrice},00€</td>
          </tr>`
}

function getTotalItems (gTotalPrice){
  return `   <tr class="td-sendend">
              <td>Total</td><td></td><td></td>
              <td>${gTotalPrice},00 €</td>
            </tr>`
}


function paintRows (){
const gTotalPrice = infoProduct1.price * infoProduct1.units + infoProduct2.price * infoProduct2.units + infoProduct3.price * infoProduct3.units;
const product1 = getBasketItems(infoProduct1);
const product2 = getBasketItems(infoProduct2);
const product3 = getBasketItems(infoProduct3);
const rtotal = getTotalItems(gTotalPrice);
tbody.innerHTML =  product1 + product2 + product3 + rtotal;
const buttonCart = document.querySelectorAll('.js-buttoncart');
setInterval(() => {
  for (let i = 0; i<buttonCart.length; i++){
    buttonCart[i].addEventListener("click",addCart )  
  }
  
}, 10);
}

paintRows();

setInterval(() => {
  for (let i = 0; i<buttonCart.length; i++){
    buttonCart[i].addEventListener("click",addCart )    
  }
  
}, 10);


function addCart (event){
  let y = event.currentTarget;
  if (y.classList.contains("js-buttoncartinc")){
    infoProduct1.units += 1;
  } else if (infoProduct1.units > 0){
    infoProduct1.units -= 1;
  }
  paintRows();
  console.log("Ha funcionado! Y ha hecho click en "+ y.innerHTML);
}

const address = document.querySelector(".js-address");
const city = document.querySelector(".js-city");
const zip = document.querySelector(".js-zip");

const userAddress = {};

function addUserAddress (event){
  const name = event.currentTarget.name;
  userAddress[name] = event.currentTarget.value;
  console.log("He funcionado y has cambiado el " + name);
  console.log(userAddress);
}

address.addEventListener("keyup", addUserAddress);
city.addEventListener("keyup", addUserAddress);
zip.addEventListener("keyup", addUserAddress);

