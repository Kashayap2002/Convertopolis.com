
const valueInput = document.getElementById('value-input');
const unitSelectFrom = document.getElementById('unit-select-from');
const unitSelectTo = document.getElementById('unit-select-to');
const convertButton = document.getElementById('convert-button');
const resultValue = document.getElementById('result-value');


const areaConversion = {
  'square-meter': {
    'square-meter': (value) => value,
    'square-kilometer': (value) => value / 1000000,
    'square-centimeter': (value) => value * 10000,
    'square-millimeter': (value) => value * 1000000,
    'square-micrometer': (value) => value * 1000000000000,
    'hectare': (value) => value / 10000,
    'square-mile': (value) => value / 2590000,
    'square-yard': (value) => value * 1.196,
    'square-foot': (value) => value * 10.764,
    'square-inch': (value) => value * 1550,
    'acre': (value) => value / 4047,
  },
  'square-kilometer': {
    'square-meter': (value) => value * 1000000,
    'square-kilometer': (value) => value,
    'square-centimeter': (value) => value * 10000000000,
    'square-millimeter': (value) => value * 1000000000000,
    'square-micrometer': (value) => value * 1000000000000000000,
    'hectare': (value) => value * 100,
    'square-mile': (value) => value / 2.59,
    'square-yard': (value) => value *    1195990.0463011,
    'square-foot': (value) => value * 10763910.41671,
    'square-inch': (value) => value * 1550003100.0062,
    'acre': (value) => value * 247.10538146717,
  },
  'square-centimeter': {
    'square-meter': (value) => value / 10000,
    'square-kilometer': (value) => value / 10000000000,
    'square-centimeter': (value) => value,
    'square-millimeter': (value) => value * 100,
    'square-micrometer': (value) => value * 10000000000,
    'hectare': (value) => value / 100000000,
    'square-mile': (value) => value / 25899881103.36,
    'square-yard': (value) => value / 8361.2736,
    'square-foot': (value) => value / 929.0304,
    'square-inch': (value) => value * 0.155,
    'acre': (value) => value / 40468564.224,
  },
  'square-millimeter': {
    'square-meter': (value) => value / 1000000,
    'square-kilometer': (value) => value / 1000000000000,
    'square-centimeter': (value) => value / 100,
    'square-millimeter': (value) => value,
    'square-micrometer': (value) => value * 1000000,
    'hectare': (value) => value / 10000000000,
    'square-mile': (value) => value / 2589988110336,
    'square-yard': (value) => value / 836127.36,
    'square-foot': (value) => value / 92903.04,
    'square-inch': (value) => value / 645.16,
    'acre': (value) => value / 4046856422.4,
  },
  'square-micrometer': {
    'square-meter': (value) => value / 1000000000000,
    'square-kilometer': (value) => value / 1000000000000000000,
    'square-centimeter': (value) => value / 10000000000,
    'square-millimeter': (value) => value / 1000000,
    'square-micrometer': (value) => value,
    'hectare': (value) => value / 10000000000000000,
    'square-mile': (value) => value / 2.589988110336E+18,
    'square-yard': (value) => value / 836127360000,
    'square-foot': (value) => value / 92903040000,
    'square-inch': (value) => value / 645160000,
    'acre': (value) => value / 4046856422400000,
  },
  'hectare': {
    'square-meter': (value) => value * 10000,
    'square-kilometer': (value) => value / 100,
    'square-centimeter': (value) => value * 100000000,
    'square-millimeter': (value) => value * 10000000000,
    'square-micrometer':    (value) => value * 10000000000000000,
    'hectare': (value) => value,
    'square-mile': (value) => value / 259,
    'square-yard': (value) => value * 11959.900463011,
    'square-foot': (value) => value * 107639.1041671,
    'square-inch': (value) => value * 15500031.000062,
    'acre': (value) => value * 2.4710538146717,
  },
  'square-mile': {
    'square-meter': (value) => value * 2590000,
    'square-kilometer': (value) => value * 2.59,
    'square-centimeter': (value) => value * 25899881103.36,
    'square-millimeter': (value) => value * 2589988110336,
    'square-micrometer': (value) => value * 2.589988110336E+18,
    'hectare': (value) => value * 259,
    'square-mile': (value) => value,
    'square-yard': (value) => value * 3097600,
    'square-foot': (value) => value * 27878400,
    'square-inch': (value) => value * 4014009600,
    'acre': (value) => value * 640,
  },
  'square-yard': {
    'square-meter': (value) => value / 1.196,
    'square-kilometer': (value) => value / 11959.900463011,
    'square-centimeter': (value) => value * 8361.2736,
    'square-millimeter': (value) => value * 836127.36,
    'square-micrometer': (value) => value * 836127360000,
    'hectare': (value) => value / 1195990.0463011,
    'square-mile': (value) => value / 3097600,
    'square-yard': (value) => value,
    'square-foot': (value) => value * 9,
    'square-inch': (value) => value * 1296,
    'acre': (value) => value / 4840,
  },
  'square-foot': {
    'square-meter': (value) => value / 10.764,
    'square-kilometer': (value) => value / 10763910.41671,
    'square-centimeter': (value) => value * 929.0304,
    'square-millimeter': (value) => value * 92903.04,
    'square-micrometer': (value) => value * 92903040000,
    'hectare': (value) => value / 107639.1041671,
    'square-mile': (value) => value / 27878400,
    'square-yard': (value) => value / 9,
    'square-foot': (value) => value,
    'square-inch': (value) => value * 144,
    'acre': (value) => value / 43560,
  },
  'square-inch': {
    'square-meter': (value) => value / 1550,
    'square-kilometer': (value) => value / 1550003100.0062,
    'square-centimeter': (value) =>
    value * 645.16,
    'square-millimeter': (value) => value * 645.16,
    'square-micrometer': (value) => value * 645160000,
    'hectare': (value) => value / 15500031.000062,
    'square-mile': (value) => value / 4014009600,
    'square-yard': (value) => value / 1296,
    'square-foot': (value) => value / 144,
    'square-inch': (value) => value,
    'acre': (value) => value / 6272640,
  },
  'acre': {
    'square-meter': (value) => value * 4047,
    'square-kilometer': (value) => value / 247.10538146717,
    'square-centimeter': (value) => value * 40468564.224,
    'square-millimeter': (value) => value * 4046856422.4,
    'square-micrometer': (value) => value * 4046856422400000,
    'hectare': (value) => value * 0.4046856422,
    'square-mile': (value) => value / 640,
    'square-yard': (value) => value * 4840,
    'square-foot': (value) => value * 43560,
    'square-inch': (value) => value * 6272640,
    'acre': (value) => value,
  },
};


function convertArea() {
  const value = parseFloat(valueInput.value);
  const fromUnit = unitSelectFrom.value;
  const toUnit = unitSelectTo.value;

  if (isNaN(value)) {
    resultValue.textContent = 'Invalid input';
    return;
  }

  if (!areaConversion.hasOwnProperty(fromUnit) || !areaConversion[fromUnit].hasOwnProperty(toUnit)) {
    resultValue.textContent = 'Invalid conversion';
    return;
  }

  const convertedValue = areaConversion[fromUnit][toUnit](value);
  resultValue.textContent = convertedValue.toFixed(2);
}


convertButton.addEventListener('click', convertArea);

