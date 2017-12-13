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

console.log("---- Test for rectangle -----");
const rectangle = {
  length: 4,
  width: 4,
  isSquare: function (){
    let result = '';
    if(this.length === this.width){
       console.log(`Yes - the rectangle is a square `);
    } else {
      console.log("the rectangle is a not square");
    }

    return result;
  },
  area: function () {
    let areaResult = console.log(`Area of this rectangle is ${this.length * this.width}`);
    return areaResult;
  },
  perimeter: function(){
    let perimeterArea = console.log(`Perimeter Area of rectangle
      ${(this.width + this.length) * 2 }`);
    return perimeterArea;
  }
};

rectangle;
rectangle.isSquare();
rectangle.area();
rectangle.perimeter()



// Part 2, Triangle
//
// Given the following a triangle object like the one below, write the following functions:
//
// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not
// const triangle = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };

console.log("---- Test for triangle -----");
const triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4,

  isEquilateral: function (){
    if(this.sideA === this.sideB && this.sideB === this.sideC ){
      console.log("Yes - this triangle is equilateral");
    } else {
      console.log("No - this triangle is not equilateral");
    }
    return ;
  },

  isIsosceles: function(){
    if((this.sideA === this.sideB && this.sideB !== this.sideC ) ||
       (this.sideA !== this.sideB && this.sideB === this.sideC)){
      console.log("Yes - this triangle is isosceles");
    } else {
      console.log("No - this triangle is not isosceles");
    }
    return ;
  },

  area: function(){
   let perimeter = (this.sideA + this.sideB + this.sideC ) / 2 ;
   let resultArea = Math.sqrt(perimeter *( (perimeter - this.sideA) * (perimeter - this.sideB) * (perimeter - this.sideC)));

    console.log(`Area of triangle ${resultArea.toFixed(2)}`);

    // return;
  },

  isObtuse: function(){
    if(this.sideA !== this.sideB && this.sideB !== this.sideC ){
      console.log("Yes - this triangle is obtuse");
    } else {
      console.log("No - this triangle is not obtuse");
    }
    return ;

  }
};

triangle;
triangle.isEquilateral();
triangle.isIsosceles();
triangle.area();
triangle.isObtuse();
