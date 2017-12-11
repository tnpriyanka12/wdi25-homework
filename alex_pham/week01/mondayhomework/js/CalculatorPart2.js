// Part 2

// Write a function that will take one argument (a number) and
// perform the following operations, using the functions you
// wrote earlier1:

// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the
// radius.
// Calculate what percentage that area is of the squared result
// (#3).

const multOperatons = function (number) {
   //step 1: take of half of the number and store
  // result

     const step1 = (number / 2).toFixed(2);

     console.log(`the half of the number ${number} is ${step1}`);

  // step2: Square the result of #1 and store that result.

     const step2 = (step1 * step1).toFixed(2);

     console.log(`square of result step 1 as ${step1} is equal ${step2}`);

  // step3: Calculate the area of a circle with the result of #2
  // as the radius.

  const step3 = (step2 * 2 * Math.PI).toFixed(2);

  console.log(`The area of a circle with the result of step 2 as the radius ${step2} is equal ${step3}`);

  // step4: Calculate what percentage that area is of the
  // squared result (#3).

    const step4 = (step3 / 100).toFixed(2);

    console.log(`The percentage ${step4} % of that area ${step3}`);

    return step4;
  };

  multOperatons(4);
  multOperatons(2);
