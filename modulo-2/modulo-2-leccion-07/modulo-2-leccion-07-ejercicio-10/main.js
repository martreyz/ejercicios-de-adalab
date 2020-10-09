'use strict';

const items = [
  'Ada',
  1815,
  ['Informática', 'Matemática', 'Escritora'],
  {
    mother: 'Anna Isabella',
    father: 'Lord Byron'
  }
];

for (let i=0; i< items.length; i++){
  let data = items[i];
  let indexData = i;
  let typeData = typeof data;
  if (typeData !== 'object' || Array.isArray(data)){
  console.log (`El dato ${data} está en la posición ${indexData} y es de tipo ${typeData}` );
}  
else {
  for (const obj in data){
    console.log (`El dato ${obj} está en la posición ${indexData} y es de tipo ${typeData}` );
  }
}
  
}