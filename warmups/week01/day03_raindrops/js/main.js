console.log('HELLO');

const number = 105;

// initialise an empty string to build off
let str = "";

//Separate function to check if 'factor' is a factor of 'number'
const isFactor = function(num, factor){

  return num % factor === 0;

  // if ( num % factor === 0 ){
  //   return true;
  // } else {
  //   return false;
  // }
};

// build strings only IF isFactor returns true
if ( isFactor( number, 3 ) ){
  str += 'Pling';   // this is the same as: str = str + 'Pling';
}

if ( isFactor( number, 5 ) ){
  str += 'Plang';
}

if ( isFactor( number, 7 ) ){
  str += 'Plong';
}

if ( str.length === 0 ) {
  str += number; //+= will turn the number into a string
}

console.log(str);
