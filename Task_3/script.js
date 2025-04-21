  function convertTemperature() {
  const tempInput = document.getElementById("temperatureInput").value;
  const unitFrom = document.getElementById("unitFrom").value;
  const unitTo = document.getElementById("unitTo").value;

  // Validation Section
  if (isNaN(tempInput) || tempInput === '') {
      document.getElementById("result").textContent = "Please enter a valid number for temperature!";
      document.getElementById("formulaDisplay").textContent = '';
      return;
  }

  let result = '';
  let formula = '';

  // Conversion Logic
  if (unitFrom === 'Celsius' && unitTo === 'Fahrenheit') {
      result = (tempInput * 9 / 5) + 32;
      formula = "Celsius × 9/5 + 32 = Fahrenheit";
  } else if (unitFrom === 'Celsius' && unitTo === 'Kelvin') {
      result = parseFloat(tempInput) + 273.15;
      formula = "Celsius + 273.15 = Kelvin";
  } else if (unitFrom === 'Fahrenheit' && unitTo === 'Celsius') {
      result = (tempInput - 32) * 5 / 9;
      formula = "(Fahrenheit - 32) × 5/9 = Celsius";
  } else if (unitFrom === 'Fahrenheit' && unitTo === 'Kelvin') {
      result = ((tempInput - 32) * 5 / 9) + 273.15;
      formula = "(Fahrenheit - 32) × 5/9 + 273.15 = Kelvin";
  } else if (unitFrom === 'Kelvin' && unitTo === 'Celsius') {
      result = tempInput - 273.15;
      formula = "Kelvin - 273.15 = Celsius";
  } else if (unitFrom === 'Kelvin' && unitTo === 'Fahrenheit') {
      result = ((tempInput - 273.15) * 9 / 5) + 32;
      formula = "(Kelvin - 273.15) × 9/5 + 32 = Fahrenheit";
  } else {

      // If both units are the same, no conversion is needed
      result = tempInput;
      formula = "No conversion needed.";
      
  }

  // Display the result section
  document.getElementById("result").textContent = `${result.toFixed(2)} ${unitTo}`;
  document.getElementById("formulaDisplay").textContent = `Formula: ${formula}`;
}
