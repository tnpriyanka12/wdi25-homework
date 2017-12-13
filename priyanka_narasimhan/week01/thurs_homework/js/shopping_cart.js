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

const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

const cashRegister = function(shCartObj){
  var sum = 0;
  for(var key in shCartObj){
  sum += parseFloat(shCartObj[key]);
  }
  return sum;
};


console.log(`The total sum for your shopping is: ${cashRegister(cartForParty)}`);

// var res = function(max , factor){
// var arrOfNum = [];
//   for(var i=0 ;i<=max ; i++){
//     if(i%factor == 0){
//       arrOfNum.push(i);
//     }
//   }
// return arrOfNum;
// };
//
// console.log(res(20,3));
