// The Cash Register
//
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example
//
// // Input
// const cartForParty = {
//   banana: "1.25",
//   handkerchief: ".99",
//   Tshirt: "25.01",
//   apple: "0.60",
//   nalgene: "10.34",
//   proteinShake: "22.36"
// };
//
// // Output
// cashRegister(cartForParty)); // 60.55


const cashRegister = function(cartList){
  // array of items by key
  const items = Object.keys(cartList);
  let sum = 0;

  //make for loop run through items to get item keys and item name
  for (let i = 0; i < items.length; i++) {

     const itemName = items[i]; // get the name of the key for items
     const itemPrice = cartList[itemName]; // get the price for items

     // use parseFloat method to convert and add to sum all items
     sum += Number.parseFloat(itemPrice);
  }
  const result = console.log(`The total price of the shopping cart $ ${sum}`);

  return result;

};

// Input
const cartShoppingList = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36",
  ege: "7.56"
};



// Output
cashRegister(cartShoppingList); // 60.55
