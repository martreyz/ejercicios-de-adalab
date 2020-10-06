"use strict";
let ptext;
function addtext() {
  ptext = document.querySelector(".ptext");
  ptext.innerHTML =
    ptext.innerHTML +
    "Donec ut mi vehicula, sollicitudin dui et, laoreet diam. Donec a ornare lectus. Morbi sed nisi iaculis, dictum leo et, mattis ex. Pellentesque nec consectetur massa. Nullam consectetur tincidunt lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris et dolor vitae leo efficitur vehicula. Quisque accumsan mauris hendrerit velit vehicula, sed placerat magna pulvinar. In hac habitasse platea dictumst. Integer sed augue maximus dolor pulvinar ornare. Phasellus sit amet elementum nibh, nec varius lorem. Proin quis vestibulum mauris.";
}

ptext = document.querySelector(".ptext");
ptext.addEventListener("mouseover", addtext);
