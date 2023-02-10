const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];
let a;
let Count = { banana: 0,cherry: 0,orange: 0,apple: 0,fig: 0,};
for (let i = 0; i < fruitBasket.length; i++) {
  a = fruitBasket[i];
  switch (a) {
    case "banana":
        Count.banana++;
      break;
    case "cherry":
        Count.cherry++;
      break;
    case "orange":
        Count.orange++;
      break;
    case "apple":
        Count.apple++;
      break;
    case "fig":
        Count.fig++;
    default:
      text = "No Multipel values";
  }
}
console.log("Banana : " + Count.banana);
console.log("Cherry: " + Count.cherry);
console.log("Orange : " + Count.orange);
console.log("Apple : " + Count.apple);
console.log("Fig : " + Count.fig);
  

