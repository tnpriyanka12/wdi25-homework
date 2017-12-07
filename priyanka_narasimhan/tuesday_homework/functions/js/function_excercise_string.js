 //DrEvil
//
// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
//
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)
//
console.log("\n\n Dr EVIL");

const DrEvil = function(amount){
  if(amount == 1000000){
    return ' '+amount+' dollars (pinky)';
  }
  else {
    return ' '+amount+' dollars';
  }
};

console.log(DrEvil(100));
console.log(DrEvil(1000000));



//FixStart
console.log("\n\n ---- Fix Start ---- ");
const fixStart = function(inputString){
  const firstChar = inputString[0];
  console.log(`First char is ${firstChar} ${inputString.length}. Replacing....`);

  //var str = "hehho";
  //var finalString = str.replace(/h/gi, "*");
  //var finalString = str.replace(inputString[0], "*");
  //console.log("----- "+finalString);

for(i =1; i<inputString.length;i++){
  //console.log(` char at ${i} is ${inputString[i]}`);
  if(inputString[i] === inputString[0]){
    inputString[i] = '*';
  }
  }

  console.log(`Final string  is ${inputString}. Replaced`);

};
fixStart('babble');



// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
//
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'


/*
************ notes ***********
string.slice(-3) -> gives last 3 characters
*/


const verbing = function(inputStr){
  var st = (inputStr[inputStr.slice(-3));
    console.log(st);
  if((inputStr.length >= 3) && !(inputStr[inputStr.slice(-3)] === 'ing')){
    outputStr = inputStr + 'ing';
  }
  else if(inputStr[inputStr.slice(-3)] === 'ing'){
    outputStr = inputStr + 'ly';
  }
  else {
    outputStr = inputStr;
  }
  return outputStr;
};

console.log(verbing('swimming'));
console.log(verbing('swim'));



//Mix up
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
//
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!


console.log("\n\n ---- MIXUP ---- ");
 const mixUp = function(strOne, strTwo){
   //
   //console.log("hhhhh"+strOne);
   // var strOneFirstTwoChars = strOne.slice(0,2);
   // var strTwoFirstTwoChars = strTwo.slice(0,2);
  //  var strOneRemChars = strOne.slice(3, strOne.length);
  //  console.log(strOneRemChars);
  //  var strTwoRemChars = strTwo.slice(3, strTwo.length);
  //  console.log(strTwoRemChars);

   strOneNew = strOne.slice(0,2) + strTwo.slice(3, strTwo.length);
   strTwoNew = strTwo.slice(0,2) + strOne.slice(3, strOne.length);

//   strOneNew = strOneFirstTwoChars + strTwoRemChars;

   console.log("New words are "+ strOneNew);
   console.log("New words are "+ strTwoNew);

 };

 mixUp('', 'byTWO');

 mixUp('hiONE', 'byTWOOOOOOO');

//  Create a function called notBad that takes a single argument, a string.
//
// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
// For example:
//
//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'
