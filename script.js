
const conversionRatios = {
    mm: 1,
    cm: 0.1,
    m: 0.001,
    km: 0.000001,
    inch: 0.0393701,
    ft: 0.00328084,
    yd: 0.00109361,
    mi: 0.000000621371,
    nmi: 0.000000539957,
    au: 0.00000000000668459,
    ly: 0.0000000000001057,
    pc: 0.0000000000000324078
  };
  
  
  const valueInput = document.getElementById('value-input');
  const unitSelectFrom = document.getElementById('unit-select-from');
  const unitSelectTo = document.getElementById('unit-select-to');
  const convertButton = document.querySelector('.convert-button');
  const resultValue = document.getElementById('result-value');
  
  
  function convertUnits() {
    const value = parseFloat(valueInput.value);
    const fromUnit = unitSelectFrom.value;
    const toUnit = unitSelectTo.value;
  
    
    if (isNaN(value)) {
      resultValue.textContent = 'Invalid input';
      return;
    }
  
        const convertedValue = value * conversionRatios[fromUnit] / conversionRatios[toUnit];
    resultValue.textContent = `${value} ${fromUnit} = ${convertedValue} ${toUnit}`;
  }
  
  
  convertButton.addEventListener('click', convertUnits);
  