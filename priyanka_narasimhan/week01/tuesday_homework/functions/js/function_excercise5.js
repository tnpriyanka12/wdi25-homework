// ## The Temperature Converter
//
// It's hot out! Let's make a converter.
//
// Create a function called celsiusToFahrenheit:
// - Store a celsius temperature into a variable.
// - Convert it to fahrenheit and output "NN°C is NN°F".
// - Create a function called fahrenheitToCelsius:
//
// Now store a fahrenheit temperature into a variable.
// - Convert it to celsius and output "NN°F is NN°C."

console.log("\n\nfunction excercise 5");

const celciusToFarenheit = function(celTemp){
  const celToFarenheight = (celTemp * (9/5))+32;
  console.log(`${celTemp} °C is equal to ${celToFarenheight.toFixed(2)}°F`);
};

const farenheitToCelcius = function(farTemp){
  const farToCelcius = ( (farTemp - 32)*(5/9) );
  console.log(`${farTemp} °F is equal to ${farToCelcius.toFixed(2)}°F`);
};


celciusToFarenheit(10);
celciusToFarenheit(22);
farenheitToCelcius(50);
farenheitToCelcius(71.6);
