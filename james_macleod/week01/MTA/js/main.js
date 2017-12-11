// Create a program that models a simple subway system.

// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

//Create the MTA network using an object and nested arrays.
const mtaLines = {
  lineN: [
    "Times Square",
    "34th Street",
    "28th Street",
    "23rd Street",
    "Union Square",
    "8th Street"
  ],
  lineL: [
    "8th Street",
    "6th Street",
    "Union Square",
    "3rd Street",
    "1st Street"
  ],
  line6: [
    "Grand Central",
    "33rd Street",
    "28th Street",
    "23rd Street",
    "Union Square",
    "Astor Place"
  ]
};

// Create an array to store the stops between onStop and Unions Sq
let lineOneStops = [];
//Create an array that stores the stops between Union Square and offStop.
let lineTwoStops = [];

const tripPlanner = function(onLine, onStop, offLine, offStop) {
  let firstLine = mtaLines[onLine];
  let secondLine = mtaLines[offLine];

  // Ive created reverse aliases for the lines here for when the traveller boards after Union Sq. ie the function needs to loop backwards through array.
  if (
    onStop === "8th Street" ||
    "3rd Street" ||
    "1st Street" ||
    "Astor Place"
  ) {
    firstLine = firstLine.reverse();
  }
  //****I'd like to change this to be more scaleable.

  //Create global scoped variables.

  let unionSqIndex = null;
  let unionSqIndex2 = null;
  let onIndex = null;
  let offIndex = null;

  //Function searches through the object for the 'onLine' argument.
  // This is an array which is a key of the object.
  //Next 20 lines are creating array with the stops on the firstLine.

  for (let p = 0; p < firstLine.length; p++) {
    if (firstLine[p] === onStop) {
      onIndex = p + 1;
    }
  }

  //For loop searches through the firstLine array for the onStop arguement and return the value of the index to onIndex variable.

  for (let b = 0; b < firstLine.length; b++) {
    if (firstLine[b] === "Union Square") {
      unionSqIndex = b + 1;
    }
  }

  //For loop searches through the array and pushes the stops between onStop and Union Square to another variable.
  for (let j = onIndex; j < unionSqIndex; j++) {
    lineOneStops.push(firstLine[j]);
  }

  // The next 30 or so lines are repeating the process for the secondLine. I tried to make this DRY by failed miserably.

  //For loop searches through the firstLine array for the onStop arguement and return the value of the index to onIndex variable.
  for (let f = 0; f < secondLine.length; f++) {
    if (secondLine[f] === "Union Square") {
      unionSqIndex2 = f;
    }
  }

  for (let g = 0; g < secondLine.length; g++) {
    if (secondLine[g] === offStop) {
      offIndex = g + 1;
    }
  }

  for (let k = unionSqIndex2 + 1; k < offIndex; k++) {
    lineTwoStops.push(secondLine[k]);
  }

  // This function reverses through the lineTwoArray if the lineTwoStop array is equal (ie. the destination appears before Union square on the line)

  if (lineTwoStops.length === 0) {
    for (let y = unionSqIndex2 - 1; y >= offIndex - 1; y--) {
      lineTwoStops.push(secondLine[y]);
    }
  }

  // Print the message to the console.

  console.log(
    `You must travel through the following stops on the ${onLine[4]} line: ${lineOneStops.join(
      ", "
    )}.`
  );

  console.log("Change at Union Square.");
  console.log(
    `Your jounrney continues through the following stops: ${lineTwoStops.join(
      ", "
    )}.`
  );

  //Print the total stops.

  let totalStops = lineOneStops.concat(lineTwoStops);
  console.log(`Total stops : ${totalStops.length}`);
};
