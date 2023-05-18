
const valueInput = document.getElementById('value-input');
const unitSelectFrom = document.getElementById('unit-select-from');
const unitSelectTo = document.getElementById('unit-select-to');
const convertButton = document.getElementById('convert-button');
const resultValue = document.getElementById('result-value');

const temperatureConversion = {
  celsiusToFahrenheit: (celsius) => (celsius * 9 / 5) + 32,
  celsiusToKelvin: (celsius) => celsius + 273.15,
  fahrenheitToCelsius: (fahrenheit) => (fahrenheit - 32) * 5 / 9,
  fahrenheitToKelvin: (fahrenheit) => (fahrenheit - 32) * 5 / 9 + 273.15,
  kelvinToCelsius: (kelvin) => kelvin - 273.15,
  kelvinToFahrenheit: (kelvin) => (kelvin - 273.15) * 9 / 5 + 32,
};


function convertTemperature() {
  const value = parseFloat(valueInput.value);
  const unitFrom = unitSelectFrom.value;
  const unitTo = unitSelectTo.value;

  if (isNaN(value)) {
    resultValue.textContent = 'Please enter a valid numeric value.';
    return;
  }

  let result;

 
  if (unitFrom === 'celsius' && unitTo === 'fahrenheit') {
    result = temperatureConversion.celsiusToFahrenheit(value);
  } else if (unitFrom === 'celsius' && unitTo === 'kelvin') {
    result = temperatureConversion.celsiusToKelvin(value);
  } else if (unitFrom === 'fahrenheit' && unitTo === 'celsius') {
    result = temperatureConversion.fahrenheitToCelsius(value);
  } else if (unitFrom === 'fahrenheit' && unitTo === 'kelvin') {
    result = temperatureConversion.fahrenheitToKelvin(value);
  } else if (unitFrom === 'kelvin' && unitTo === 'celsius') {
    result = temperatureConversion.kelvinToCelsius(value);
  } else if (unitFrom === 'kelvin' && unitTo === 'fahrenheit') {
    result = temperatureConversion.kelvinToFahrenheit(value);
  } else {
    result = value;
  }

  resultValue.textContent = result.toFixed(2);
}

convertButton.addEventListener('click', convertTemperature);
