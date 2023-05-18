
function convertTime() {
   
    var inputValue = parseFloat(document.getElementById("value-input").value);
  
   
    var fromUnit = document.getElementById("unit-select-from").value;
    var toUnit = document.getElementById("unit-select-to").value;
  
   
    var result = convert(fromUnit, toUnit, inputValue);
  
  
    document.getElementById("result-value").textContent = result.toFixed(4);
  }
  
 
  function convert(fromUnit, toUnit, value) {
    
    var conversionFactors = {
      second: {
        minute: 1 / 60,
        hour: 1 / 3600,
        day: 1 / 86400,
        week: 1 / 604800,
        month: 1 / 2.628e+6,
        year: 1 / 3.1536e+7,
      },
      minute: {
        second: 60,
        hour: 1 / 60,
        day: 1 / 1440,
        week: 1 / 10080,
        month: 1 / 43800,
        year: 1 / 525600,
      },
      hour: {
        second: 3600,
        minute: 60,
        day: 1 / 24,
        week: 1 / 168,
        month: 1 / 730.484,
        year: 1 / 8765.81,
      },
      day: {
        second: 86400,
        minute: 1440,
        hour: 24,
        week: 1 / 7,
        month: 1 / 30.4368,
        year: 1 / 365.242,
      },
      week: {
        second: 604800,
        minute: 10080,
        hour: 168,
        day: 7,
        month: 1 / 4.34524,
        year: 1 / 52.1775,
      },
      month: {
        second: 2.628e+6,
        minute: 43800,
        hour: 730.484,
        day: 30.4368,
        week: 4.34524,
        year: 1 / 12,
      },
      year: {
        second: 3.1536e+7,
        minute: 525600,
        hour: 8765.81,
        day: 365.242,
        week: 52.1775,
        month: 12,
      },
    };
  
    
    if (!conversionFactors[fromUnit] || !conversionFactors[fromUnit][toUnit]) {
      return "Conversion not supported";
    }
  
   
    var conversionFactor = conversionFactors[fromUnit][toUnit];
    var result = value * conversionFactor;
    return result;
  }
  
  
  document.getElementById("convert-button").addEventListener("click", convertTime);
  