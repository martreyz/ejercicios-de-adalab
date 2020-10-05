"use strict";

function vat(a) {
  const netPrice = a;
  const vatPrice = a * 0.21;
  const grossPrice = a * 1.21;

  const result = `Precio sin IVA: ${netPrice}, IVA: ${vatPrice} y Total: ${grossPrice}`;
  return result;
}

console.log(vat(10));
