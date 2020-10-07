"use strict";

const cesta = {};
cesta.maxpear = 20;
cesta.minpear = 1;
cesta.actualpear = 5;
cesta.initialpear = 10;
cesta.add = (addpear) => (cesta.actualpear = cesta.actualpear + 1);
cesta.take = (takepear) => (cesta.actualpear = cesta.actualpear - 1);
cesta.resetp = (resetpear) => (cesta.actualpear = cesta.initialpear);
