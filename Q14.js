console.time();
class Item {
    constructor(name, sellIn, quality) {
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
    }
  }
  
  class Shop {
    constructor(items = []) {
      this.items = items;
    }
  
  updateQuality()
   {
    for (let i = 0; i < this.items.length; i++) {
      let item = this.items[i];

      if (item.name !== 'Sulfuras, Hand of Ragnaros') {
        item.sellIn--;

        if (item.name === 'Aged Brie') {
          if (item.quality < 50) {
            item.quality++;
          }
        } else if (item.name === 'Backstage passes ') {
          if (item.sellIn <= 0) {
            item.quality = 0;
          } else if (item.sellIn <= 5) {
            item.quality += 3;
          } else if (item.sellIn <= 10) {
            item.quality += 2;
          } else {
            item.quality++;
          }
        } 
        let qualityDecrease = item.sellIn < 0 ? 2 : 1;
                if (item.name.includes('Conjured')) {
                  qualityDecrease *= 2;
                }
                item.quality = Math.max(0, item.quality - qualityDecrease);
              }

        if (item.quality > 50) {
          item.quality = 50;
        }
      }
    }

}
  
  const items = [
       
    new Item('Aged Brie', 2, 0),
   new Item('Sulfuras, Hand of Ragnaros', 0, 80),
    new Item('Backstage passes', 15, 20),
    new Item('Conjured Mana Cake', 3, 6),
  ];
  
  const gildedRose = new Shop(items);
  
  console.log('First Day 0:');
  console.log(gildedRose.items); 
  
  gildedRose.updateQuality(); 
  
  console.log('Second Day 1:');
  console.log(gildedRose.items); 
  
  gildedRose.updateQuality(); 
  
  console.log('Third Day 2:');
  console.log(gildedRose.items); 
  console.timeEnd();
  

