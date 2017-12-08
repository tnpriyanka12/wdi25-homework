// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

const squareNumber = function (sNum) {
  const squaredNum = sNum * sNum
    console.log(`The result of squaring the number ${sNum} is ${squaredNum}`); //Within the curly brackets, are these inputs taking variables ? (arguments accepted?) Through string concatenation how do we insert an argument??
};

squareNumber(3);

// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
const halfNumber = function (hNum) {
  const halvedNum = hNum / 2
    console.log(`Half of ${hNum} is ${halvedNum}`);
};

halfNumber(10);

// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

const percentOf = function (pNum1, pNum2) {
  const percentNum = pNum1 / pNum2 * 100
    console.log(`${pNum1} is ${percentNum}% of ${pNum2}`);
}

percentOf(25,89);






// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."


const calcArea = function (radius) {
  const areaNum = Math.PI* radius * radius
    console.log(`The area for a circle with radius ${radius} is ${areaNum}`);
}
 calcArea(18);







// Bonus: Round the result so there are only two digits after the decimal.
// Part 2
//
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).
