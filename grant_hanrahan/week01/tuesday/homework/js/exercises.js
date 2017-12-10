// Exercises: if/else statements
//
// What number's bigger?
//
// Write a function named greaterNum that:
//
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").
// The World Translator

const greaterNum = function(numOne, numTwo){
  if ( numOne > numTwo){
    console.log(`The greater number of ${numOne} and ${numTwo} is ${numOne}.`);
  }
  else {
    console.log(`The greater number of ${numOne} and ${numTwo} is ${numTwo}.`);
  }
}
greaterNum(2, 5);
greaterNum(10, 3);



// Write a function named helloWorld that:
//
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.
// The Grade Assigner

const helloWorld = function(languageCode) {
  if (languageCode === 'es'){
    console.log('Hola Mundo');
  }
  else if (languageCode === 'de') {
    console.log('Hallo Welt');
  }
  else{
    console.log('Hello World');
  }
}
  helloWorld('es');
  helloWorld('de');
  helloWorld();

// Write a function named assignGrade that:
//
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

const assignGrade = function(score) {
  if (score >= 90){
    console.log('A');
  }
  else if (score >= 75){
    console.log('B');
  }
  else if (score >= 60){
    console.log('C');
  }
  else if (score >= 50){
    console.log('D');
  }
  else{
    console.log('F');
  }
}
assignGrade(95);
assignGrade(75);
assignGrade(61);
assignGrade();

// The Pluralizer
//
// Write a function named pluralize that:
//
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

const pluralize = function (number, noun) {
  if ( number > 1){
    console.log(`${number} ${noun}s`);
  }
  else {
    console.log(`${number} ${noun}`);
  }
}
pluralize(2, 'cat');
pluralize(1, 'cow');
pluralize(10, 'geese');
