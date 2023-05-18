
function convertVolume() {
   
    const value = parseFloat(document.getElementById('value-input').value);
    const unitFrom = document.getElementById('unit-select-from').value;
    const unitTo = document.getElementById('unit-select-to').value;
  
    
    const conversionFactors = {
      'cubic-meter': 1,
      'cubic-kilometer': 1e9,
      'cubic-centimeter': 1e-6,
      'cubic-millimeter': 1e-9,
      liter: 0.001,
      milliliter: 0.000001,
      'us-gallon': 0.00378541,
      'us-quart': 0.000946353,
      'us-pint': 0.000473176,
      'us-cup': 0.000236588,
      'us-fluid-ounce': 2.95735e-5,
      'us-table-spoon': 1.47868e-5,
      'us-tea-spoon': 4.92892e-6,
      'imperial-gallon': 0.00454609,
      'imperial-quart': 0.00113652,
      'imperial-pint': 0.000568261,
      'imperial-fluid-ounce': 2.84131e-5,
      'imperial-table-spoon': 1.77583e-5,
      'imperial-tea-spoon': 5.91939e-6,
      'cubic-mile': 4.16818e9,
      'cubic-yard': 0.764555,
      'cubic-foot': 0.0283168,
      'cubic-inch': 1.63871e-5
    };
  
    
    if (!conversionFactors.hasOwnProperty(unitFrom) || !conversionFactors.hasOwnProperty(unitTo)) {
      document.getElementById('result-value').textContent = 'Conversion not supported.';
      return;
    }
  
   
    const result = (value * conversionFactors[unitFrom]) / conversionFactors[unitTo];
  
    document.getElementById('result-value').textContent = result.toExponential(4);
  }
  
  
  document.getElementById('convert-button').addEventListener('click', convertVolume);
  