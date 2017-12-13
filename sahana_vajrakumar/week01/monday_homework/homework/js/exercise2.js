const drEvil = function( amount ){
  if(amount === 1000000){
    return temp =`${amount} dollars (Pinky)`;
  } else{
    return `${amount} dollars`
  }

}

console.log(drEvil( 1000000 ));

const mixUp = function( stringOne , stringTwo ){
const stringOneSlice = stringOne.slice( 0 , 2 );
const stringTwoSlice = stringTwo.slice( 0 , 2 );
const newStringOne = `${stringTwoSlice}${stringOne.substr(2)}`;
const newStringTwo = `${stringOneSlice}${stringTwo.substr(2)}`;
  return `${newStringOne} ${newStringTwo}`

};
console.log(mixUp( "plate" , "cups"));
console.log(mixUp( 'dog', 'dinner'));
