// The even/odd reporter
//
// Write a for loop that will iterate from 0 to
// 20. For each iteration, it will check if
// the current number is even or odd, and
// report that to the screen (e.g. "2 is
// even").

for (let i = 0; i < 20; i++) {
  if ( i % 2 === 0){
    console.log(`The number ${i} is even number`);
  }

}

// Multiplication Tables

// Write a for loop that will iterate from 0 to
// 10. For each iteration of the for loop, it
// will multiply the number by 9 and log the
// result (e.g. "2 * 9 = 18").

// Bonus: Use a nested for loop to show the
// tables for every multiplier from 1 to 10
// (100 results total

let totalcount = 0;

for (let i = 0; i <= 10; i++) {
  for (let j = 0; j <= i ; j++) {
    const multiply = i * j;
    console.log(`%c ${i} X ${j} = ${multiply}`, `color:red; font-size:16pt; background-color:green`);
    totalcount++;
  }

}

console.log(`the loop count ${totalcount}`);


// The Grade Assigner

// Check the results of assignGrade function
// from the conditionals exercise for every
// value from 60 to 100 - so your log should
// show "For 89, you got a B. For 90, you got
// an A.", etc.

const assignGrade = function( mark ){

    if( mark >= 90 ) {
      return 'A';
    } else if( mark >= 80) {
      return 'B';
    } else if (mark >= 70) {
      return 'C';
    } else if (mark >= 60){
      return 'D';
    } else {
      return 'F';
    }


};

   for (let i = 60; i <= 100; i++) {
     //let grade = assignGrade(i);
     // console.log(`score ${i} and grade ${grade}`);

      console.log(`score ${i} and grade ${assignGrade(i)}`);
   }


   // Exercises: Arrays

   // Your top choices

  // Create an array to hold your top five
  // choices of something (colors, presidents,
  // whatever). If you choose movies, the right
  // top choice is "Satantango".

  // For each choice, log to the screen a
  // string like: "My #1 choice is blue."
  // Bonus: Change it to log "My 1st choice,
  // "My 2nd choice", "My 3rd choice", picking
  // the right suffix for the number based on
  // what it is.

let myChoiceList = [
  'blue',
  'Omar',
  'Ground zero',
  'Asian food',
  'Zoo'
];

const suffixes = ['st','nd','rd','th','th'];

for (let i = 0; i < myChoiceList.length; i++) {

 let currentChoice = myChoiceList[i];

  // let currentChoice = myChoiceList[i];
  //  console.log(`My ${i + 1}st choice is ${currentChoice}`);

  // if( i === 0 ) {
  //   console.log(`my ${i + 1}st choice ${currentChoice}`);
//   // } else if (i === 1){
//
// }

const suffix = suffixes[i];

console.log(`my ${i + 1} ${suffix} choice of ${currentChoice}`);
};
