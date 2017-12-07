// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').

const answerArr = ["W", "T", "F"];

let guessArr = [];

// Start with a reward amount of $0

let rewardAmount = 0;

let getPrize = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

// Write a function called guessLetter that will:
// Take one argument, the guessed letter.

const guessLetter = function(guess) {
  for (let i = 0; i <= answerArr.length; i++) {
    if (answerArr[i] === guess) {
      // If the guessed letter matches a word letter, changed the guessed letters array to reflect that.

      // When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.

      let result = guessArr.push(guess);
      console.log(`Congratulations! You found a match!`);
      console.log(guessArr);

      // Every time a letter is guessed, generate a random amount and reward the user

      // if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.

      let prize = getPrize(10, 1000000);
      if (guessArr.length > 1) {
        prize = prize * 2;
      }
      if (guessArr.length > 2) {
        prize = prize * 3;
      }
      if (guessArr.length > 3) {
        prize = prize * 4;
      }
      console.log(`You have won ${prize} dollars!`);

      // It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.

      if (guessArr === answerArr) {
        console.log("Well done! You've solved the game!");
      } else {
        console.log("Keep at it!");
      }
    }
  }
};

guessLetter("W");
guessLetter("n");

let countPrize = function(count) {
  const prize = getPrize(10, 1000);
  const result = prize * guessArr.length;
  return result;
};

const count = guessArr.length;
// console.log(count);
countPrize(count);

// When they guess the word, log their final reward amount.
