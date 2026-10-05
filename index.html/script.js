function checkWeather() {

    const city = document.getElementById("cityInput").value;
    const result = document.getElementById("weatherResult");

    if (city === "") {
        result.innerHTML = "Please enter a city.";
        return;
    }

    const weatherData = {
        calbayog: {
            temperature: "30°C",
            condition: "Sunny"
        },
        manila: {
            temperature: "32°C",
            condition: "Partly Cloudy"
        },
        cebu: {
            temperature: "31°C",
            condition: "Cloudy"
        },
        davao: {
            temperature: "29°C",
            condition: "Rainy"
        }
    };

    const cityName = city.toLowerCase();

    if (weatherData[cityName]) {

        result.innerHTML = `
            <h2>${city}</h2>
            <p>Temperature: ${weatherData[cityName].temperature}</p>
            <p>Condition: ${weatherData[cityName].condition}</p>
        `;

    } else {

        result.innerHTML = `
            <h2>${city}</h2>
            <p>Weather data is not available.</p>
        `;
    }
}