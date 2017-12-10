
//FIRST ATTEMPT - IT WORKS BUT IT'S DIFFICULT TO READ

// // Write a function isLeapYear
// const isLeapYear = function(year){
//
// // divisible by 4?
//   if ( year % 4 === 0 ) {
//
//     if ( year % 100 === 0 ){
//
//       if ( year % 400 === 0){
//         return true;
//
//       } else {
//         return false;
//       } // else (400)
//
//     } else {
//       return true;
//     }
//   } else {
//     return false
//   } // else
//
//   // NOT divisible by 100
//
//     // BUT divisible by 400
//
// };

// SAHANA'S SOLUTION
let isLeapYear = function( enterYear ){
  let year = false;

  //To check the year
  if ( enterYear % 4 === 0 && enterYear % 100 !== 0) {
    year = true;
  };
  if (enterYear % 100 === 0 && enterYear % 400 === 0){
    year = true;
  };

  // if 'year' has been changed to true (ie satisfied the if statements above) then it is a leap year
  if ( year ){
    console.log(`${enterYear} is a leap year!`);
  } else {
    console.log(`${enterYear} is not a leap year`);
  };

}; //function

//
// const isLeapYear = function(year){
//
//   // year divisible by 4 AND ( NOT divisible by 100 OR divisible by 400)
//
//   if ( year % 4 === 0 && ( year % 400 === 0 || year % 100 !== 0 )){
//     // return true
//   }
//
// };

isLeapYear(1997)
isLeapYear(1996)
isLeapYear(1900)
isLeapYear(2000)
