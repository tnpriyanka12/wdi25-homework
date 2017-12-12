//PLAN MY TRIP

const allLinesOfTrip = {
//line N
lineN : ['Times Square',
          '34th',
          '28th',
          '23rd',
          'Union Square',
          '8th'
        ],

lineL : ['8th',
          '6th',
          'Union Square',
          '3rd',
          '1st'
        ],

line6 : ['Grand Central',
          '33rd',
          '28th',
          '23rd',
          'Union Square',
          'Astor Place',
        ]

};

const reverseStations = function(lineToReverse){
  //If station is backwards of start point,
  //reverse the array in temp variable and
  //make that the current array
      var reversedPointsArray = lineToReverse.reverse();
      console.log(`reverseddd stations: ${lineToReverse}`);
      return reversedPointsArray;
  };

const singleLineTrip = function(startLine, startPoint, endLine, endPoint){
  console.log(`TRIP PLAN: ${startLine}: ${startPoint} to ${endLine}:${endPoint}`)
    var currentLine = allLinesOfTrip[startLine];
    var currentLineName = startLine;

    var revLine;
    console.log(`CURRENTLINE:${startLine}`);


    //Calculating the number of stops
    var startPointIndexVal = currentLine.indexOf(startPoint);
    var endPointIndexVal   = currentLine.indexOf(endPoint);
    if(startPointIndexVal > endPointIndexVal){
      revLine = reverseStations(currentLine);
      var startPointIndexVal = currentLine.indexOf(startPoint);
      var endPointIndexVal   = currentLine.indexOf(endPoint);
      currentLine = revLine;

    };
    var numOfStops = endPointIndexVal - startPointIndexVal;
    //corner case : if no stops in between, .slice returns undefined value, so assign last stop
    if(numOfStops === 1){
      stopsNeedToTravel = currentLine[endPointIndexVal];
    }
    else{
    var stopsNeedToTravel = currentLine.slice(startPointIndexVal+1, endPointIndexVal);
    }


    console.log(`NOOFSTOPS:${numOfStops}`);
    console.log(stopsNeedToTravel);
    console.log(stopsNeedToTravel);
    console.log(`You must travel through the following stops on the ${currentLine}\n:
                 ${stopsNeedToTravel}`);
      //${currentLine}:$stopsNeedToTravel`);

      //Position back stations array to the right place, if reversed earlier
      if(startPointIndexVal > endPointIndexVal){
        revLine = reverseStations(currentLine);
        currentLine = revLine;
      };
};

// singleLineTrip('lineN', '34th', 'lineN', '8th');
// singleLineTrip('lineN', '8th', 'lineN', '34th');

console.log(`\n\n\n\n\n`);

const multiLineTrip = function(startLine, startPoint, endLine, endPoint){
///FIRST TRIP
    //Change end line to Union Square
    var endPointInFirstJourney = 'Union Square';
    var endLineInFirstJourney  = startLine;
    singleLineTrip(startLine, startPoint, endLineInFirstJourney, endPointInFirstJourney);
////SECOND TRIP
    var  startLineInSecondJourney    = endLine;
    var  startPointInFirstJourney    = 'Union Square';
    console.log(`Changing lines`);
    singleLineTrip(startLineInSecondJourney, startPointInFirstJourney, endLine, endPoint);
};

multiLineTrip('lineN', '34th', 'line6', 'Astor Place');
multiLineTrip('lineN', '34th', 'line6', 'Grand Central');

const planMyTrip = function(startLine, startPoint, endLine, endPoint){
  if(startLine === endLine){
    singleLineTrip(startLine, startPoint, endLine, endPoint);
  } else {
    multiLineTrip(startLine, startPoint, endLine, endPoint);
  }
};

// planMyTrip('lineN', '34th', 'line6', 'Astor Place');
// planMyTrip('lineN', '34th', 'lineN', 'Times Square');
