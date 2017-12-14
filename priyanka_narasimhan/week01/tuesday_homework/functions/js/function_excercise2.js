// ## The Puppy Age Calculator
//
// You know how old your dog is in human years, but what about dog years? Calculate it!
//
// Write a function named calculateDogAge that:
// - takes 1 argument: your puppy's age.
// - calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// - outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
// - Call the function three times with different sets of values.
// - Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.

console.log("\n\nfunction_excercise2");

const calculateDogAge = function (puppyAge){
  dogAge =  (puppyAge * 7);
  console.log(`Your doggie is ${dogAge} years old in dog years!"`);
};
calculateDogAge(2);
calculateDogAge(6);
calculateDogAge(3.5);


const calculateDogAge2 = function (puppyAge, ageConversionRate){
  dogAge =  (puppyAge * ageConversionRate);
  console.log(`Your doggie is ${dogAge} years old in dog years!"`);
};
calculateDogAge2(2,7);
calculateDogAge2(6,10);
calculateDogAge2(3.5,9);
calculateDogAge2(3.5,9.5);
