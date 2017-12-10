// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.


console.log("\n\n Calculator Ex");

//Square of Number
const squareNumber = function(numb){
  const sqOfNumb =  Math.pow(numb,2);
  console.log("The result of squaring the number "+numb+ " is " + sqOfNumb );
  return sqOfNumb;
};

//Half of Number
const halfNumber = function(numb){
  const halfOfNumb =  (numb / 2);
  console.log("Half of " +numb+ " is " +halfOfNumb);
  return halfOfNumb;
};


//Percentage of Number
const percentOf = function(numb1, numb2){
  var percentValue = (numb1/numb2)*100 ;
  console.log("The Percentage: "+numb1+ " is " + percentValue+"% of " +numb2 );
  return percentValue;
};

//Area Function
const areaOfCircle = function(radius){
  const areaCalc = Math.PI * Math.pow(radius, 2);
  console.log(`The Area is ${areaCalc}.`);
  console.log(`The Area(rounded) is ${areaCalc.toFixed(3)}.`);
  return areaCalc;
};


//Calling the functions
squareNumber(3);
halfNumber(10);
percentOf(2,4);
percentOf(4,2);

areaOfCircle(1);


const usingAllFunctions = function(numb){
  var res1 = halfNumber(numb);
  var res2 = squareNumber(res1);
  var res3 = areaOfCircle(res2);
  var res4 = percentOf(res3, res2);
};

usingAllFunctions(6);
