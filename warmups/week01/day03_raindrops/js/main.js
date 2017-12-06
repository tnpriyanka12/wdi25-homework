console.log('HELLO');

const number = 105;


let str = "";

const isFactor = function(num, factor){

  return num % factor === 0;
  // if ( num % factor === 0 ){
  //   return true;
  // } else {
  //   return false;
  // }
};

//TESTING FOR 3
if ( isFactor(number, 3) ){
  // str = str + 'Pling';
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

console.log(str);
