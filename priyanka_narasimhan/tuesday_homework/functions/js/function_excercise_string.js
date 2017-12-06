// DrEvil
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


//Mix up
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
//
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!
console.log("\n\n ---- MIXUP ---- ");


// st = 'Hello';
// var pri = st.slice(1,2);
// console.log("jjjjjjjjj"+pri);
//
// const mixUp = function(strOnef, strTwof){
//   console.log("hhhhh"+strOne);
//
//   var strOneFirstTwoChars = strOne.slice(0,2);
//   var strTwoFirstTwoChars = strTwo.slice(0,2);
//   var strOneRemChars = strOne(3, strOne.length);
//   var strTwoRemChars = strTwo(3, strTwo.length);
//
//   strOneNew = 'strOneFirstTwoChars' + 'strTwoRemChars';
//
//   console.log("New words are "+ strOneNew);
// };
// mixUp('hello', 'bye');


//FisStart
console.log("\n\n ---- Fix Start ---- ");
const fixStart = function(inputString){
  const firstChar = inputString[0];
  console.log(`First char is ${firstChar} ${inputString.length}. Replacing....`);
//  var finalString = inputString.replace(/inputString[0]/g, "*");
for(i =1; i<inputString.length;i++){
  console.log(` char at ${i} is ${inputString[i]}`);

  if(inputString[i] === 'b'){
    inputString[i] = '*';
  }
  }

  console.log(`Final string  is ${inputString}. Replaced`);

};
fixStart('babble');
