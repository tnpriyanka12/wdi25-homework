// # Exercises: Functions
//
// ## The Fortune Teller
//
// Why pay a fortune teller when you can just program your fortune yourself?
//
// Write a function named tellFortune that:
// - takes 4 arguments: number of children, partner's name, geographic location, job title.
// - outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// - Call that function 3 times with 3 different values for the arguments.
console.log('function_excercise1');

const fortune = function (numOfChildren, partnerName, geoLocation, jobTitle){
  console.log(`Your future: You will have ${numOfChildren} with ${partnerName} at ${geoLocation} when you are a/an ${jobTitle}`);
};

fortune(2,'ABC','USA', 'Coder');
fortune(2,'CDE','India', 'Soothsayer');
fortune(1,'abc','jkl');
