// The Calculator
// Part 1

// Write a function called squareNumber that will
// take one argument (a number), square that
// number, and return the result. It should also
// log a string like "The result of squaring the
// number 3 is 9."

const squareNumber = function( number ){
  // const squareNum = number * number;
  const squareNum = Math.pow(number,2);
  console.log(`The square number of ${number} equal ${squareNum}`);
  return squareNum;
};

squareNumber(3);
squareNumber(4);

// Write a function called halfNumber that will
// take one argument (a number), divide it by 2,
// and return the result. It should also log a
// string like "Half of 5 is 2.5.".

const halfNumber = function (num) {

const halfNum = (num / 2);

console.log(`This number ${num} divide it by 2 equal ${halfNum.toFixed(1)}`);

return halfNum.toFixed(1);

};

halfNumber(5);
halfNumber(7);


// Write a function called percentOf that will take two numbers,
// figure out what percent the first number represents of the
// second number, and return the result. It should also log a string like "2 is 50% of 4."

const percentOf = function ( number1, number2 ){
  const result = (number1 * number2) / 100;

  console.log(`Result ${result} is ${number1}% of ${number2}`);
  return result;
};

percentOf(50,4);
percentOf(70,2);


// Write a function called areaOfCircle that will take one
// argument (the radius), calculate the area based on that, and
// return the result. It should also log a string like "The area
// for a circle with radius 2 is 12.566370614359172."

// Bonus: Round the result so there are only two digits after
// the decimal.


const areaOfCircle = function ( radius) {
   const areaCircle = (radius * 2 * Math.PI).toFixed(2);

   console.log(`A circle with radius ${radius} is ${areaCircle}`);
   return areaCircle;
};

areaOfCircle(2);
areaOfCircle(3);
