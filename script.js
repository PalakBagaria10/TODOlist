const locationInput = document.getElementById("locationInput");
const weatherInfoContainer = document.getElementById("weatherInfo");

function getWeather() {
  const location = locationInput.value.trim();
  if (location !== "") {
    // Replace 'YOUR_API_KEY' with your actual API key from OpenWeatherMap
    const apiKey = "YOUR_API_KEY";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        displayWeather(data);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        weatherInfoContainer.innerHTML =
          "Error fetching weather data. Please try again.";
      });
  }
}

function displayWeather(data) {
  const cityName = data.name;
  const temperature = data.main.temp;
  const weatherDescription = data.weather[0].description;

  const weatherInfo = `
        <p>City: ${cityName}</p>
        <p>Temperature: ${temperature}°C</p>
        <p>Weather: ${weatherDescription}</p>
    `;

  weatherInfoContainer.innerHTML = weatherInfo;
}
