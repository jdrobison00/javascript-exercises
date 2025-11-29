const RATIO_FTOC = 5/9;
const ZERO_C = 32;

function roundToTenths(num) {
  return Math.round(num * 10) / 10;
}

const convertToCelsius = function(fahrenheit) {
  return roundToTenths((fahrenheit - ZERO_C) * RATIO_FTOC);
};

const convertToFahrenheit = function(celsius) {
  return roundToTenths(celsius / RATIO_FTOC +ZERO_C);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
