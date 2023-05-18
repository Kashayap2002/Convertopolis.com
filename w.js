
const valueInput = document.getElementById('value-input');
const unitSelectFrom = document.getElementById('unit-select-from');
const unitSelectTo = document.getElementById('unit-select-to');
const convertButton = document.getElementById('convert-button');
const resultValue = document.getElementById('result-value');


const conversionRates = {
  kilogram: {
    gram: 1000,
    milligram: 1000000,
    metricTon: 0.001,
    longTon: 0.000984207,
    shortTon: 0.00110231,
    pound: 2.20462,
    ounce: 35.274,
    carrat: 5000,
    atomicMassUnit: 6.02214e+26,
  },
  gram: {
    kilogram: 0.001,
    milligram: 1000,
    metricTon: 1e-6,
    longTon: 9.8421e-7,
    shortTon: 1.10231e-6,
    pound: 0.00220462,
    ounce: 0.035274,
    carrat: 5,
    atomicMassUnit: 6.02214e+23,
  },
  milligram: {
    kilogram: 1e-6,
    gram: 0.001,
    metricTon: 1e-9,
    longTon: 9.8421e-10,
    shortTon: 1.10231e-9,
    pound: 2.2046e-6,
    ounce: 3.5274e-5,
    carrat: 0.005,
    atomicMassUnit: 6.02214e+20,
  },
  metricTon: {
    kilogram: 1000,
    gram: 1e+6,
    milligram: 1e+9,
    longTon: 0.984207,
    shortTon: 1.10231,
    pound: 2204.62,
    ounce: 35273.96,
    carrat: 5000000,
    atomicMassUnit: 6.02214e+29,
  },
  longTon: {
    kilogram: 1016.05,
    gram: 1.016e+6,
    milligram: 1.016e+9,
    metricTon: 1.01605,
    shortTon: 1.12,
    pound: 2240,
    ounce: 35840,
    carrat: 5080234.54,
    atomicMassUnit: 6.02214e+29,
  },
  shortTon: {
    kilogram: 907.185,
    gram: 907185,
    milligram: 9.072e+8,
    metricTon: 0.907185,
    longTon: 0.892857,
    pound: 2000,
    ounce: 32000,
    carrat: 4535923.7,
    atomicMassUnit: 6.02214e+29,
  },
  pound: {
    kilogram: 0.453592,
    gram: 453.592,
    milligram: 453592,
    metricTon: 0.000453592,
    longTon: 0.000446429,
    shortTon: 0.0005,
    ounce: 16,
    carrat: 2267.96,
    atomicMassUnit: 6.02214e+26,
},
ounce: {
  kilogram: 0.0283495,
  gram: 28.3495,
  milligram: 28349.5,
  metricTon: 2.83495e-5,
  longTon: 2.79018e-5,
  shortTon: 3.125e-5,
  pound: 0.0625,
  carrat: 141.748,
  atomicMassUnit: 1.66054e+24,
},
carrat: {
  kilogram: 0.0002,
  gram: 0.2,
  milligram: 200,
  metricTon: 2e-7,
  longTon: 1.96841e-7,
  shortTon: 2.20462e-7,
  pound: 0.000440925,
  ounce: 0.00705479,
  atomicMassUnit: 1.20443e+23,
},
atomicMassUnit: {
  kilogram: 1.66054e-27,
  gram: 1.66054e-24,
  milligram: 1.66054e-21,
  metricTon: 1.66054e-30,
  longTon: 1.63504e-30,
  shortTon: 1.83077e-30,
  pound: 3.66086e-27,
  ounce: 5.85746e-26,
  carrat: 8.30182e-24,
},
};


function convertWeight() {
const value = parseFloat(valueInput.value);
const unitFrom = unitSelectFrom.value;
const unitTo = unitSelectTo.value;

if (isNaN(value)) {
  resultValue.textContent = 'Invalid input';
  return;
}

if (unitFrom === unitTo) {
  resultValue.textContent = value.toFixed(4);
  return;
}

if (!conversionRates.hasOwnProperty(unitFrom) || !conversionRates[unitFrom].hasOwnProperty(unitTo)) {
  resultValue.textContent = 'Conversion not supported';
  return;
}

const conversionRate = conversionRates[unitFrom][unitTo];
const result = value * conversionRate;
resultValue.textContent = result.toFixed(4);
}


convertButton.addEventListener('click', convertWeight);

