// Credit Card Validation
//
// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.
//
// Here are the rules for a valid number:
//
// Number must be 16 digits, all of them must be numbers
// You must have at least two different digits represented (all of the digits cannot be the same)
// The final digit must be even
// The sum of all the digits must be greater than 16
// The following credit card numbers are valid:
//
// 9999-9999-8888-0000
// 6666-6666-6666-1666
// The following credit card numbers are invalid:
//
// a923-3211-9c01-1112 invalid characters
// 4444-4444-4444-4444 only one type of number
// 1111-1111-1111-1110 sum less than 16
// 6666-6666-6666-6661 odd final number
//
//
// Example
//
// validateCreditCard('9999-9999-8888-0000'); // Returns: true
// Hint: Remove the dashed from the input string before checking if the input credit card number is valid.
//
// Bonus: Return an object indicating whether the credit card is valid, and if not, what the error is
//
// { valid: true, number: 'a923-3211-9c01-1112' }
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
// Double Bonus: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.



const creditCardValidation = function ( cCardNumber){

// Number must be 16 digits, all of them must be numbers
 if( isNumber (cCardNumber)  &&  cCardNumber.length === 16 )

};




// const Amex = function (inputtxt)
// {
//   var cardno = /^(?:3[47][0-9]{13})$/;
//   if(inputtxt.value.match(cardno))
//         {
//       return true;
//         }
//       else
//         {
//         alert("Not a valid Amercican Express credit card number!");
//         return false;
//         }
// };







// const visaCC = function (inputtxt)
// {
//   var cardno = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
//   if(inputtxt.value.match(cardno))
//         {
//       return true;
//         }
//       else
//         {
//         alert("Not a valid Visa credit card number!");
//         return false;
//         }
// };
//
//
//
// const mastercard = function (inputtxt)
// {
//   var cardno = /^(?:5[1-5][0-9]{14})$/;
//   if(inputtxt.value.match(cardno))
//         {
//       return true;
//         }
//       else
//         {
//         alert("Not a valid Mastercard number!");
//         return false;
//         }
// };


// const discoverCC  = function (inputtxt)
// {
//   var cardno = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;
//   if(inputtxt.value.match(cardno))
//         {
//       return true;
//         }
//       else
//         {
//         alert("Not a valid Discover card number!");
//         return false;
//         }
// };
//
//
// const dinnerCC = function (inputtxt)
// {
//   var cardno = /^(?:3(?:0[0-5]|[68][0-9])[0-9]{11})$/;
//   if(inputtxt.value.match(cardno))
//         {
//       return true;
//         }
//       else
//         {
//         alert("Not a valid Dinners Club card number!");
//         return false;
//         }
// };
//
//
// const JCBCC = function (inputtxt)
// {
//   var cardno = /^(?:(?:2131|1800|35\d{3})\d{11})$/;
//   if(inputtxt.value.match(cardno))
//         {
//       return true;
//         }
//       else
//         {
//         alert("Not a valid JCB card number!");
//         return false;
//         }
// };
