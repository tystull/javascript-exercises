const convertToCelsius = function(fahrenheit) {
  // Fahrenheit to Celsius conversion: (x - 32) * (5/9)
  celsius = (fahrenheit - 32) * (5/9);

  // Round to one decimal place
  return Math.round(celsius * 10) / 10;
  
};

const convertToFahrenheit = function(celsius) {
  // Celsius to Fahrenheit conversion: (x * (9/5) + 32)
  fahrenheit = (celsius * (9/5) + 32);

  // Round to one decimal place
  return Math.round(fahrenheit * 10) / 10;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
