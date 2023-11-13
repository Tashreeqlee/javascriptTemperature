function convert() {
    var celsiusInput = document.getElementById("celsius");
    var fahrenheitInput = document.getElementById("fahrenheit");
    var resultElement = document.getElementById("result");
    if (celsiusInput.value !== "") {
      var celsius = parseFloat(celsiusInput.value);
      var fahrenheit = (celsius * 9 / 5) + 32;
      resultElement.textContent = celsius + "°C is equal to " + fahrenheit.toFixed(2) + "°F";
    } else if (fahrenheitInput.value !== "") {
      var fahrenheit = parseFloat(fahrenheitInput.value);
      var celsius = (fahrenheit - 32) * 5 / 9;
      resultElement.textContent = fahrenheit + "°F is equal to " + celsius.toFixed(2) + "°C";
    } else {
      resultElement.textContent = "Please enter a temperature";
    }
  }