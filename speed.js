
const valueInput = document.getElementById('value-input');
   const unitSelectFrom = document.getElementById('unit-select-from');
const unitSelectTo = document.getElementById('unit-select-to');
const convertButton = document.getElementById('convert-button');
const resultValue = document.getElementById('result-value');


function convertSpeed() {
  
  const fromUnit = unitSelectFrom.value;
  const toUnit = unitSelectTo.value;
  const value = parseFloat(valueInput.value);

 
  let result;
  if (fromUnit === toUnit) {
    result = value;
  } else if (fromUnit === 'm/s' && toUnit === 'km/h') {
    result = value * 3.6;
  } else if (fromUnit === 'm/s' && toUnit === 'mi/h') {
    result = value * 2.23694;
  } else if (fromUnit === 'm/s' && toUnit === 'ft/s') {
    result = value * 3.28084;
  } else if (fromUnit === 'km/h' && toUnit === 'm/s') {
    result = value / 3.6;
  } else if (fromUnit === 'km/h' && toUnit === 'mi/h') {
    result = value / 1.60934;
  } else if (fromUnit === 'km/h' && toUnit === 'ft/s') {
    result = value / 1.09728;
  } else if (fromUnit === 'mi/h' && toUnit === 'm/s') {
    result = value / 2.23694;
  } else if (fromUnit === 'mi/h' && toUnit === 'km/h') {
    result = value * 1.60934;
  } else if (fromUnit === 'mi/h' && toUnit === 'ft/s') {
    result = value * 1.46667;
  } else if (fromUnit === 'ft/s' && toUnit === 'm/s') {
    result = value / 3.28084;
  } else if (fromUnit === 'ft/s' && toUnit === 'km/h') {
    result = value * 1.09728;
  } else if (fromUnit === 'ft/s' && toUnit === 'mi/h') {
    result = value / 1.46667;
  }

 
  resultValue.textContent = result.toFixed(2);
}


convertButton.addEventListener('click', convertSpeed);
