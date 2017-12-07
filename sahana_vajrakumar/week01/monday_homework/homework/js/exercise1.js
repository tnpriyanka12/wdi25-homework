const squareNumber = function( number ){
    const square = number*number;
    console.log(`The result of squaring the number ${number} is ${square}.`)
    return square;
};

  //squareNumber( 3 );

  const halfNumber = function( number ){
  const result = number/2 ;
  console.log(`Half of ${number} is ${result.toFixed(2)}.`);
  return result;
};

// halfNumber( 15 );

  const percentOf = function( num1 , num2 ){
  const percentage = (num1/num2)*100;
  console.log(`${num1} is ${percentage}% of ${num2}`);
  return percentage;
};
// percentOf( 5 , 8 );

const areaOfCircle = function( radius ){
    const area = Math.PI*radius*radius;
    console.log(`The area for a circle with radius ${radius} is ${area.toFixed(2)}.`);
    return area;
};
// areaOfCircle( 5 );
;

const calculator = function(number) {
    const halfNumResult = halfNumber( number );
    const squareNumResult = squareNumber( halfNumResult );
    const areaResult = areaOfCircle( squareNumResult);
    const percentResult = percentOf( areaResult.toFixed(2) , squareNumResult.toFixed(2) );
    return percentResult;

};


console.log(`Final calculated result is ${calculator(5).toFixed(2)}%`);
