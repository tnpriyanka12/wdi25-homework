

// Geometry Function Lab
//
// Part 1, Rectangle
//
// Given the following a rectangle object like the one below, write the following functions:
//
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle
// const rectangle = {
//   length: 4,
//   width: 4
// };




const rectangle = {
  length: 4,
  width: 4
};


const isSquare = function () {
  if (rectangle.length === 3 && rectangle.width === 4) {
    return 'is a square'
  }
    return 'is not a square'
  };

const area = function () {
  return `Area is ${rectangle.length * rectangle. width}`
};

const perimeter = function () {
  return `perimeter is ${rectangle.length * 4}`
};

// Part 2, Triangle

// Given the following a triangle object like the one below, write the following functions:

// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not

const triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};


const isEquilateral = function () {
  if (triangle.sideA === triangle.sideB === triangle.sideC) {
    return 'Triangle is equilateral.'
    }
    return 'Triangle is not equilateral'
};

const isIsosceles = function () {
  if (triangle.sideA === triangle.sideB || triangle.sideC) {
    return 'Triangle is an isosceles'
  }
    return 'Triangle is not an isosceles'  //not sure why first return being activated
};

const area2 = function () {
  return `${1/2 * side   `
}
