console.log('hello world');

/*////////////////////PART ONE///////////////////////////*/

const rectangle = {
  length: 4,
  width: 4
};

const isSquare = function() {
  if (rectangle['length'] % rectangle['width'] === 0){

  return console.log("It's square!");
  }
  else console.log("It's not square!");
};
isSquare();

const area = function() {
  totalArea = rectangle['length'] * rectangle['width'];
    return console.log('Area:',totalArea);

};
area();

const perimeter = function() {
  totPerimeter = rectangle['length'] + rectangle['width'];
    return console.log('Perimeter:',totPerimeter);

};
perimeter();

/*////////////////////PART TWO///////////////////////////*/

const triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

const isEquilateral = function(three) { // triangle = test
  if (three['sideA'] === three['sideB'] === three['sideC']){

  // return console.log("Triangle is equilateral!");
  return true;
  }
  // else console.log("Triangle is not equilateral!");
  return false;
};
console.log('Is the triangle equilateral?', isEquilateral(triangle));


const isIsosceles = function(two) {
  if (two['sideA'] === two['sideB'] || ['sideA'] === two['sideC'] || ['sideB'] === two['sideC']) {
    return true;
  }
  return false;
  // if (triangle['sideA'] === triangle['sideB'] === triangle['sideC']
};
console.log('Is the triangle an isosceles?', isIsosceles(triangle));

const triArea = function(side) { // triangle = test
  const a = side['sideA'], b = side['sideB'], c = side['sideC'];
  const sum = (a + b + c) / 2;
  const area = Math.sqrt(sum*(sum-a)*(sum-b)*(sum-c));
  // return console.log("Triangle is equilateral!");
  return area;
};
console.log('The area of the triangle is', triArea(triangle));

const obtuse = function(obSide) {
  const arrayify = Object.values(obSide);
    //const str =
    console.log(arrayify[0]);
    console.log(arrayify[1]);
    console.log(arrayify[2]);
  // formula: c^2 > a^2 + b^2
  // to square a number use Math.pow(num, 2)
};
console.log('Is the triangle obtuse?', obtuse(triangle));
