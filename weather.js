// Practical Task 2: get the current weathe for London

const apiUrl = "https://api.open-meteo.com/v1/forecast?latitude=51.5085&longitude=-0.1257&current=temperature_2m,weather_code&forecast_days=1";

const fetchWeather = async () => {
    try {
    // Fetch the current weather from the API
    const response = await fetch(apiUrl).then(response => response.json());
    console.log(response);
    // Create HTML
    document.getElementById("time").textContent = response.current.time;
    document.getElementById("temperature").textContent = response.current.temperature_2m + "°C";
    document.getElementById("weather").textContent = generateWeather(response.current.weather_code);
    } catch (error) {
        console.error("Error:", error);
        document.getElementById("error").textContent = "Could not fetch the weather. Plsease try it later";
    }
}

fetchWeather();

// Define the weatehr by weather code
const generateWeather = weatherCode => {
    const weather = (() => {
        if(weatherCode === 0) return "Clear night";
        if(weatherCode === 1) return "Sunny day";
        if(weatherCode === 2 || weatherCode === 3) return "Partly cloudy";
        if(weatherCode === 5 || weatherCode === 6 || weatherCode === 7) return "Cloudy";
        if(weatherCode === 8) return "Overcast";
        if ([9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].includes(weatherCode)) return "rain";
        if ([21, 22, 23, 24, 25, 26, 27].includes(weatherCode)) return "Snow";
        if ([28, 29, 30].includes(weatherCode)) return "Thunder";
        return "Unknown";
    })();
    return weather;
}