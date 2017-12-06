const secretLetters     = ['A', 'P', 'P', 'L' , 'E'];
let guessedLetters  = ['_', '_', '_', '_' , '_'];
let reward = 0;
let allGuessed = 0;

      let guessLetter = function(letterGuessed) {
          let correctLetter = false;


          for (let i = 0; i < secretLetters.length; i++) {
          if (secretLetters[i] == letterGuessed) {
                  guessedLetters[i] = letterGuessed;
                  reward = reward + Math.floor(Math.random() * 10);
                  correctLetter = true;
                  allGuessed ++;
              }
              
          }
          if (correctLetter) {
          console.log('Yay, you found a letter!');
          console.log(guessedLetters.join(''));
          if (allGuessed == secretLetters.length) {
          console.log('YOU WON!');
          console.log(`total amount won is ${reward}`);
           }
           } else {
             reward = reward - Math.floor(Math.random() * 10);
            console.log('Sorry! try again');
          }
       }

       guessLetter('E');
       guessLetter('Z');
       guessLetter('A');
       guessLetter('P');
       guessLetter('S');
       guessLetter('L');
