// Refactored code so rainSpeak is a function that can be called with any number.

console.log('HELLO');


const isFactor = function(num, factor){

  return num % factor === 0;
  // if ( num % factor === 0 ){
  //   return true;
  // } else {
  //   return false;
  // }
};

const rainSpeak = function( number ){
  // initialise an empty str each time the function is called
  let str = "";

  if ( isFactor(number, 3) ){
    str += 'Pling';
  }

  if ( isFactor(number, 5) ){
    str += 'Plang';
  }

  if ( isFactor(number, 7) ){
    str += 'Plong';
  }

  if ( str.length === 0 ) {
    str += number;
  }
  return str;

};



// console.log(rainSpeak(105))
