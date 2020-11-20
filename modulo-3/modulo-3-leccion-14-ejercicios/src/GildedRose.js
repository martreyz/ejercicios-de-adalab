const Item = require("./Item");

class GildedRose {
  updateQuality(items) {
    const nameAgedBrie = "Aged Brie";
    const nameBackstage = "Backstage passes to a TAFKAL80ETC concert";
    const nameSulfuras = "Sulfuras, Hand of Ragnaros";
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const itemName = item.name;
      if (
        nameAgedBrie !== itemName &&
        nameBackstage !== itemName &&
        item.quality > 0 &&
        nameSulfuras !== itemName
      ) {
        item.quality -= 1;
      } else {
        if (item.quality < 50) {
          item.quality += 1;
          if (nameAgedBrie === itemName && item.sellIn < 6) {
            item.quality += 1;
          }
          if (nameAgedBrie === itemName && item.sellIn < 11) {
            item.quality += 1;
          }
          if (
            nameBackstage === itemName &&
            item.sellIn < 11 &&
            item.quality < 50
          ) {
            item.quality += 1;
            if (item.sellIn < 6 && item.quality < 50) {
              item.quality += 1;
            }
          }
        }
      }
      if (nameSulfuras !== itemName) {
        item.sellIn = item.sellIn - 1;
      }
      if (item.sellIn < 0) {
        if (nameAgedBrie !== itemName) {
          if (
            nameBackstage != itemName &&
            item.quality > 0 &&
            nameSulfuras != itemName
          ) {
            item.quality -= 1;
          } else {
            item.quality = 0;
          }
        } else {
          if (item.quality < 50) {
            item.quality += 1;
          }
          if (nameAgedBrie === itemName && item.sellIn <= 0) {
            item.quality = 0;
          }
        }
      }
      if (nameSulfuras !== itemName && item.quality > 50) {
        item.quality = 50;
      }
    }
    return items;
  }
}

module.exports = new GildedRose();
