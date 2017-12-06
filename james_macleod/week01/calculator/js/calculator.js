// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.

const squareNumber = function(x) {
  y = x * x;
  console.log(`The result of squaring ${x} is ${y}.`);
  return y;
};

squareNumber(4);

const halfNumber = function(x) {
  y = x / 2;
  console.log(`Half of ${x} is ${y}.`);
  return y;
};

halfNumber(8);

const percentOf = function(x, y) {
  percentEquals = x / y * (100 / 1);
  percentRounded = percentEquals.toFixed(2);
  console.log(`${x} is ${percentRounded}% of ${y}.`);
  return percentEquals;
};

percentOf(58, 200);

const areaOfCircle = function(radius) {
  area = Math.PI * (radius * radius);
  areaRounded = area.toFixed(2);
  console.log(
    `The area of a circle with a radius of ${radius} is ${areaRounded}.`
  );
  return area;
};

areaOfCircle(23);

// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

const myFunction = function(myNumber) {
  halfMyNumber = halfNumber(myNumber);
  squareMyNumber = squareNumber(halfMyNumber);
  circleOfNumber = areaOfCircle(squareMyNumber);
  percentOfNumber = percentOf(circleOfNumber, squareMyNumber);
  return percentOfNumber;
};

myFunction(3);
console.log(percentOfNumber);

const drEvil = function(cash) {
  if (cash === 1000000) {
    console.log(`${cash} dollars (pinky).`);
  } else {
    console.log(`${cash} dollars.`);
  }
};

drEvil(1000000);

// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each.

const mixUp = function(string1, string2) {
  endTwoString1 = string1.slice(2, string1.length);
  endTwoString2 = string2.slice(2, string2.length);
  startTwoString1 = string1.slice(0, 2);
  startTwoString2 = string2.slice(0, 2);
  console.log(
    startTwoString2 + endTwoString1 + " " + startTwoString1 + endTwoString2
  );
};

mixUp("The bus broke down on the way to school", "Phillis was a lovely lady!");

// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:

const fixStart = function(string) {
  const firstChr = string[0];
  for (i = 1; i < string.length; i++) {
    if (string[i] === firstChr) {
      let newString = string.replace(firstChr, "*");
      return newString;
    }
  }
};

fixStart("freffie");
