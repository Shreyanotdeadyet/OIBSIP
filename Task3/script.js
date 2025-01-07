document.getElementById("convertButton").addEventListener("click", function () {
    const inputTemp = parseFloat(document.getElementById("temperatureInput").value);
    const inputUnit = document.getElementById("unitInput").value;
    const resultDiv = document.getElementById("result");

    // Validate input
    if (isNaN(inputTemp)) {
        resultDiv.textContent = "⚠️ Please enter a valid number!";
        resultDiv.style.color = "#ff4444";
        return;
    }
    resultDiv.style.color = "#fff"; // Reset color for valid input

    let convertedTemp = "";
    switch (inputUnit) {
        case "Celsius":
            convertedTemp = `${(inputTemp * 9) / 5 + 32} °F (Fahrenheit), ${inputTemp + 273.15} K (Kelvin)`;
            break;
        case "Fahrenheit":
            convertedTemp = `${((inputTemp - 32) * 5) / 9} °C (Celsius), ${((inputTemp - 32) * 5) / 9 + 273.15} K (Kelvin)`;
            break;
        case "Kelvin":
            convertedTemp = `${inputTemp - 273.15} °C (Celsius), ${((inputTemp - 273.15) * 9) / 5 + 32} °F (Fahrenheit)`;
            break;
    }

    // Display result
    resultDiv.textContent = `Converted Temperature: ${convertedTemp}`;
});
