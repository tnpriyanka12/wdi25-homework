// Create 2 functions that calculate properties of a circle.
//
// Create a function called calcCircumfrence:
//
// - Pass the radius to the function.
// - Calculate the circumference based on the radius, and output "The circumference is NN".
//
// Create a function called calcArea:
//
// - Pass the radius to the function.
// - Calculate the area based on the radius, and output "The area is NN".

console.log("\n\nfunction excercise 4");


//Circumference Function
const calcCircumfrence = function(radius){
  const circumferenceOfCircle = 2 * Math.PI * radius;
  console.log(`The circumference is ${circumferenceOfCircle.toFixed(3)}.`);
};

//Area Function
const calcArea = function(radius){
  const areaOfCircle = Math.PI * Math.pow(radius, 2);
  console.log(`The Area is ${areaOfCircle.toFixed(3)}.`);
};

calcCircumfrence(4);
calcArea(4);
