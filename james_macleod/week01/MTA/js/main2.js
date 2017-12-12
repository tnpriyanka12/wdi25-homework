// Create an object to store the data of the MTA network.

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

// Create the main function that will return the trip plan.

//The function must:
// Return stops between the start and the destination in formatting quoted.
// Let the user know if they need to change stops.

// The function takes 4 arguments. 2 for start location. 2 for destiantion location.

//

// There should be a function within the main function that will return the stops on a line given a START and DESTINATION.
//Jounrey 1. Start: onStop . Destination: Union Square.

//Jounrey 2. Start: Union Square. Destionation: offStop

//Single Line Journey 3. Start: On Stop .  Destination: offStop

// const tripPlanner = function(onLine, onStop, offLine, offStop){}
//tripPlanner( 'line6', '33rd Street', 'lineN', '34th Street');

// startStop = onStop; // Union Square;
//
// destStop = "Union Square"; // offStop;
//
// line = onLine; //offLine;



const trip1: {
  startStop: onStop,
  destStop: "Union Square",
  line: onLine
}

//If single journey trip destStop = offStop and trip2 is not run through the function.

const trip2: {
  startStop: "Union Square",
  destStop: offStop,
  line: offLine
}



const getStops = function(startStopIndex, destStopIndex, line) {
  for (const line in mtaLines) {

  }
  // return stops;
};


getStops(trip1);
getStops(trip2);

// If the

// const tripPlanner = function(onLine, onStop, offLine, offStop){}
