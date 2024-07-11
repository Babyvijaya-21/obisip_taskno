function Temperatureconverter() {
    let temperatureInput = document.getElementById("temperature").value;
    let unit = document.getElementById("unit").value;
    let resultField = document.getElementById("result");
    if (unit === "celsius") {
        let fahrenheitTemp = (temperatureInput * 9 / 5) + 32;
        let kelvinTemp = parseFloat(temperatureInput) + 273.15;
        resultField.value = `${fahrenheitTemp.toFixed(2)} °F / ${kelvinTemp.toFixed(2)} K`;
    } else if (unit === "fahrenheit") {
        let celsiusTemp = (temperatureInput - 32) * 5 / 9;
        let kelvinTemp = (parseFloat(temperatureInput) + 459.67) * 5 / 9;
        resultField.value = `${celsiusTemp.toFixed(2)} °C / ${kelvinTemp.toFixed(2)} K`;
    } else if (unit === "kelvin") {
        let celsiusTemp = temperatureInput - 273.15;
        let fahrenheitTemp = (parseFloat(temperatureInput) * 9 / 5) - 459.67;
        resultField.value = `${celsiusTemp.toFixed(2)} °C / ${fahrenheitTemp.toFixed(2)} °F`;
    }
}
