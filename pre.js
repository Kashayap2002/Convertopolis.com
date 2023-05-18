
const valueInput = document.getElementById('value-input');
const unitSelectFrom = document.getElementById('unit-select-from');
const unitSelectTo = document.getElementById('unit-select-to');
const convertButton = document.getElementById('convert-button');
const resultValue = document.getElementById('result-value');


const conversionFactors = {
  pa: {
    kpa: 0.001,
    mpa: 0.000001,
    bar: 0.00001,
    psi: 0.000145038
  },
  kpa: {
    pa: 1000,
    mpa: 0.001,
    bar: 0.01,
    psi: 0.145038
  },
  mpa: {
    pa: 1000000,
    kpa: 1000,
    bar: 10,
    psi: 145.038
  },
  bar: {
    pa: 100000,
    kpa: 100,
    mpa: 0.1,
    psi: 14.5038
  },
  psi: {
    pa: 6894.76,
    kpa: 6.89476,
    mpa: 0.00689476,
    bar: 0.0689476
  }
};


function convertPressure() {
  const value = parseFloat(valueInput.value);
  const unitFrom = unitSelectFrom.value;
  const unitTo = unitSelectTo.value;

 
  if (isNaN(value)) {
    resultValue.textContent = 'Invalid input';
    return;
  }


  const convertedValue = value * conversionFactors[unitFrom][unitTo];

 
  resultValue.textContent = convertedValue.toFixed(2);
}


convertButton.addEventListener('click', convertPressure);
