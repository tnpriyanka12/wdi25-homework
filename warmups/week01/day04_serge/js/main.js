// console.log('hello')

const serge = function(string){

  // This 'if statement' needs to run first to capture empty strings. If we
  // include this 'if statement' after the line 18 'if statement', line 18 will
  //  evaluate to true and the 'empty string if statement' will not run.

  if (string === '' || string === null || string === undefined){
  // if (string == false){
    return 'Fine. Be that way';
  };

  // this if statement checks if the string contains '?' anywhere in the string

  // if (string.includes('?')) {
  //   console.log('Sure.')
  // }

  if (string[string.length-1] === "?"){
    return 'Sure.';
  };

  if (string === string.toUpperCase()){
    return 'Woah, chill out';
  }

  return 'Whatever';
}; //serge

console.log(serge('hello?'));
console.log(serge('HELLO'));
console.log(serge('HELLO?'));
console.log(serge(''));
console.log(serge('ljfdhglsgsflgslfjglsfjghlsfhglsflsfsfg'));

// console.log(serge());
