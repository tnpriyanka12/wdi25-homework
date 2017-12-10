//Rectangle

// Given the following a rectangle object like the one below, write the following functions:

const rectangle = {
  length: 4,
  width: 4
};

// isSquare - Returns whether the rectangle is a square or not
const isSquare = function(shape) {
  if (shape.length === shape.width) {
    return "The shape is a square.";
  } else {
    return "This is not a square";
  }
};
// "The shape is a square."

// area - Returns the area of the rectangle
const recArea = function(shape) {
  area = shape.length * shape.width;
  return area;
};
// 16

// perimeter - Returns the perimeter of the rectangle
const recPeri = function(shape) {
  peri = (shape.length + shape.width) * 2;
  return peri;
};
// 16

// Given the following a triangle object like the one below, write the following functions:

const triangle = {
  sideA: 3,
  sideB: 5,
  sideC: 5
};

// isEquilateral - Returns whether the triangle is equilateral or not
const isEquilateral = function(shape) {
  if ((shape.sideA === shape.sideB) === shape.sideC) {
    return "This is a equilateral triangle";
  } else {
    return "This is a scalene triangle";
  }
};

// isIsosceles - Returns whether the triangle is isosceles or not
const isIsosceles = function(shape) {
  // check to see if two sides equal
  if (
    shape.sideA === shape.sideB ||
    shape.sideA === shape.sideC ||
    shape.sideC === shape.sideB
  ) {
    return "This is an isolsceles triangle.";
  } else {
    return "This is not an isolsceles triangle.";
  }
};
// "This is an isolsceles triangle."

// area - Returns the area of the Triangle
// const recArea = function(shape){

// }

// isObtuse - Returns whether the triangle is obtuse or not
