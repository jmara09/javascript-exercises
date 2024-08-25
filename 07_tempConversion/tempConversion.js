const convertToCelsius = function (deg) {
  let fahrenheit = ((deg - 32) * 5) / 9;

  if (!Number.isInteger(fahrenheit)) {
    return (fahrenheit = Number(fahrenheit.toFixed(1)));
  } else {
    return fahrenheit;
  }
};

const convertToFahrenheit = function (deg) {
  let celsius = (deg * 9) / 5 + 32;

  if (!Number.isInteger(celsius)) {
    return (celsius = Number(celsius.toFixed(1)));
  } else {
    return celsius;
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
