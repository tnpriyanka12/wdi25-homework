// The Word Guesser
//
// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
//


console.log(`%c %c %cTHE WORD GUESSER GAME`, 'color: RED', 'background:yellow', 'font-size: 20px');

//Type your word here (Program is case sensitive)
const myWord = 'ant';
//Chnage to 0 for 6 limited guesses - HANGMAN
const hangmanMode = 1;


//Creating global arrays
var actualWord = [];
var guessedLetters = [];


var correctGuesses = 0;
//var randomNumber = Math.floor((Math.random() * 100) + 1);
var currentAmount = 0;
var numGuesses = 0;


var match  = false;
const alphabetList = "abcdefghijklmnopqrstuvwxyz";

//Convert the word into array
actualWord = myWord.split('');

//Initialize the word to be guessed with the number of elements based on actual word
for(var i=0; i<actualWord.length; i++){
  guessedLetters[i] = '_';
}

//FORTUNE WHEEL
const increaseMoney = function(){
  var randomNumber = Math.floor((Math.random() * 100) + 1);
  console.log(`You guessed for \$ ${randomNumber}`);
  currentAmount += randomNumber;
  console.log(`Here's your \$ ${currentAmount}\n\n\n`);
//  return;
};


// //HANGMAN hangmanMode
// const checkNumGuesses = function(){
//   numGuesses += 1;
//   if(numGuesses === 6){
//     console.log(`YOU ARE DONE!! `);
//   }
//   else{
//     console.log(`YOU have ${6-numGuesses} guesses remaining!! `);
//
// return numGuesses;
//   }
// }





//Function - guessedLetters
/////////////////////////////

const guessLetter = function(currGuessLetter){
  numGuesses++;
  //If atleast one match present , execute below code, else prompt user to try again

  //Checking for atleast one match
  //.includes() -->
  var isMatch = new RegExp(currGuessLetter, 'g');

  if(myWord.match(isMatch)) {
  //console.log(`current letter guessed is : ${currGuessLetter} ntmw ${actualWord[0]}`);

          //Iterating the loop to check if guessed letter is present
          for( i = 0; i < actualWord.length; i++){
            if(currGuessLetter === actualWord[i]) {
            //console.log(`Actual word is ${actualWord} and current guess is ${currGuessLetter} and position is ${i}`);
                  guessedLetters[i] = currGuessLetter;
                  console.log(`Hurray! Guess is right! You got ${guessedLetters}.\n ${actualWord.length-correctGuesses} letters remaining to guess`);
                  correctGuesses++;
                  increaseMoney();
                }
                // else {
                //   //console.log(`try again!`);
                // }

                if(actualWord.length === correctGuesses){
                   console.log('FOUND THE WORD! ITS '+actualWord.join("")+' CONGRATULATIONS!!!!');
                   console.log(`Your final reward is ${currentAmount}`);
                   break;
                 }
                // else{
                //    console.log('Present Status '+guessedLetters.join("")+' Actual:   '+actualWord.join(""));
                // }
        }
 }
 else {
  console.log(`SORRY!! try again!\n`);
  if(hangmanMode === 1 && numGuesses === 6){
    console.log(` OOPS!!

      +---+
      |   |
      O   |
     /|\\  |
     / \\  |
          |
    =========
    \n\n`);
    numGuesses = 0;
  }
  }
};

/*
guessLetter('r');
guessLetter('r');
guessLetter('r');
guessLetter('r');
guessLetter('r');
guessLetter('r');
*/

    guessLetter('a');
    guessLetter('b');
    guessLetter('l');
    guessLetter('r');
    guessLetter('e');
    guessLetter('e');

// for (var i = 0; i < 26; i++) {
//   guessLetter(alphabetList[i]);
// }
console.log('hello');
