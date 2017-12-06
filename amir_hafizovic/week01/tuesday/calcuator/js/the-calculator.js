console.log('Hello world!');

const squareNumber = function(num) {
    return (num * num);
};

const number = 2;
console.log(`The result of squaring the number ${number} is`, squareNumber(number));

/*///////////////////////////////////////////////*/

const halfNumber = function(aNum) {
  return (aNum / 2);
};

const aNumber = 10;
console.log(`Half of ${aNumber} is`, halfNumber(aNumber));

/*////////////////////////////////////////////////*/

const percentOf = function(pOne, pTwo) {
  const result = (pOne/pTwo) * 100;
  console.log(`${pOne} is ${result}% of ${pTwo}`)
};
percentOf(2, 4);
