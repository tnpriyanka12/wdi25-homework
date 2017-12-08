// ## The Lifetime Supply Calculator
//
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
//
// Write a function named calculateSupply that:
// - takes 2 arguments: age, amount per day.
// - calculates the amount consumed for rest of the life (based on a constant max age).
// - outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// - Call that function three times, passing in different values each time.
// - Bonus: Accept floating point values for amount per day, and round the result to a round number.
// 127837.5
// function_excercise3.js:21 3652.5
// function_excercise3.js:22 200887.5
// function_excercise3.js:23 204905.25
// function_excercise3.js:24 212940.75

console.log("\n\nfunction excercise 3");

const calculateSupply = function(currentAge, amountPerDay){
  const maxAge = 80;
  const lifetimeSupply = (maxAge - currentAge) * 365.25 * amountPerDay;
  //return (lifetimeSupply);
  return Math.round(lifetimeSupply);
};

console.log(calculateSupply(10, 5));
console.log(calculateSupply(70, 1));
console.log(calculateSupply(25, 10));
console.log(calculateSupply(25, 10.2));
console.log(calculateSupply(25, 10.6));
