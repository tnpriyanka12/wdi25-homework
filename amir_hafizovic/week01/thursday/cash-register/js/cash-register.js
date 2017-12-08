const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

const cashRegister = function(cart) {
  let sum = 0; start value
  for (const key in cart) { //create object loop
    const intPrices = parseFloat(cart[key]); //turn strings into floats
    sum = sum + intPrices; // adding each key's vale with loop
  }
  return sum;// loop through object with for in
};
console.log(`The total price is ${cashRegister(cartForParty)}`);
