var spicyBurger = {
  name: "The Spicy Burger",
  meat: "Angus Beef",
  veg: "Lettuce, Tomato, Onion",
  sauce: "Mayo, Sriracha",
  price: 12.95
};

var mildBurger = {
  name: "The Mild Burger",
  meat: "Turkey",
  veg: "Lettuce, Tomato, Onion",
  sauce: "Mayo, Mustard",
  price: 10.95
}

function buySpicy() {
  var taxOne = (spicyBurger.price * 0.04712).toFixed(2);
  var totalOne = (spicyBurger.price + taxOne);
  document.getElementById('place1').innerHTML = "You Owe " + totalOne;
  document.getElementById('burgerSpicyScript').innerHTML = spicyBurger.name + "<br>" + spicyBurger.meat + "<br>" + spicyBurger.veg + "<br>" + spicyBurger.sauce + "<br>" + spicyBurger.price;
}

function buyMild() {
  var taxTwo = (mildBurger.price * 0.04712).toFixed(2);
  var totalTwo = (mildBurger.price + taxTwo);
  document.getElementById('place2').innerHTML = "You Owe " + totalTwo;

}

function testTwo() {
   document.getElementById('burgerMildScript').innerHTML = mildBurger.name + "<br>" + mildBurger.meat + "<br>" + mildBurger.veg + "<br>" + mildBurger.sauce + "<br>" + mildBurger.price;
}