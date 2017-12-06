// Create a function called DrEvil. It should
// take a single argument, an amount, and return
// ' dollars', except it will add '(pinky)' at
// the end if the amount is 1 million. For
// example:

const drEvil = function (amount) {
  if (amount < 1000000) {
    console.log(`amount ${amount} dollars`);

    return "amount" + amount + "dollars";
  }
  else {
    console.log(`amount ${amount} (pinky)`);

    return "amount" + amount + "(pinky)";
  }
};

drEvil(10);
drEvil(10000);
drEvil(10000000);
drEvil(1000000000);

// MixUp
// Create a function called mixUp. It should take
// in two strings, and return the concatenation
// of the two strings (separated by a space)
// slicing out and swapping the first 2
// characters of each. You can assume that the
// strings are at least 2 characters long. For
// example:

//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to
// find methods which may be useful!


const mixUp = function(str1, str2) {


  // const result = str1 + " " + str2;

  // console.log(str1.length);
  // console.log(str2.length);

  // console.log(str1);
  // console.log(str2);
  const str3 = str1.slice(2);
  // console.log(str3);
   const str4 = str2.slice(2);
  // console.log(str4);
  // console.log(str1.length-1);
  // console.log(str2.length-1);

   const str5 = (str1.substring(2,length));
  // console.log(str1.substring(2,length));
   const str6 = (str2.substring(2,length));
  // console.log(str2.substring(2,length));

  // const result = str2[0] + str2[1] + str1.[length - 2] + " " + str1[0] + str[1] + str1.[length - 2];

   const result = str6 + str3 + " " + str5 + str4;
   console.log(`String 1 =  ${str1} add with string 2 as = ${str2} then swap first 2 characters then concatenation together as =  ${result}`);
  // console.log(`the string 1 ${str1} and string 2 ${str2} will add together ${result}`);

  return result;
};

//mixUp('mix', 'pod');
mixUp('dog', 'dinner');


// FixStart

// Create a function called fixStart. It should
// take a single argument, a string, and return a
// version where all occurences of its first
// character have been replaced with '*', except
// for the first character itself. You can assume
// that the string is at least one character
// long. For example:

// fixStart('babble'): 'ba**le'


const fixStart = function ( str1 ) {

  console.log(`input string is ${str1}`);

  // const result = str1.replace(/str1.[length -2]/i, '*');

  // const result = str1.replace('*',/str1.[length -2]/g);

  const result = str1.replace(/str1.[length -2]/g, '*');

   // var txt = str.replace(/Microsoft/g,"W3Schools");
  // const result = str1.replace(/str1.[length -2]/gi, '*');

 console.log(`string will be ${result}`);

  return result;
};
// fixStart('babble'): 'ba**le'
fixStart('babble');
