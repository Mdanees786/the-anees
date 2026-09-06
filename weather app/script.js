const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const cityName = document.getElementById("cityName");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");

const temperature = document.querySelector(".temperature");
const weatherStatus = document.querySelector(".weather-status");

// YAHAN APNI REAL API KEY PASTE KARO
const apiKey = "6ad599cf6f8c4615858165519260609";

async function getWeather() {

const city = cityInput.value.trim();


// Empty input check
if (city === "") {
    alert("Please enter a city name");
    return;
}


try {

    // API URL
    const url =
      `https://api.weatherapi.com/v1/current.json?key=6ad599cf6f8c4615858165519260609&q=${city}&aqi=yes ` ;


    // API request bhejna
    const response = await fetch(url);


    // Check request successful hai ya nahi
    if (!response.ok) {
        throw new Error("City not found");
    }


    // Response ko JSON me convert karna
    const data = await response.json();


    // Console me complete API data dekho
    console.log(data);


    // API data ko HTML me show karna
    cityName.textContent = data.location.name;

    temperature.textContent =
        data.current.temp_c + "°C";

    humidity.textContent =
        data.current.humidity + "%";

    wind.textContent =
        data.current.wind_kph + " km/h";

    weatherStatus.textContent =
        data.current.condition.text;

}

catch (error) {

    console.log(error);

    alert("City not found or something went wrong");

}


}

// Search Button
searchBtn.addEventListener("click", getWeather);

// Enter key se search
cityInput.addEventListener("keydown", function (event) {

if (event.key === "Enter") {
    getWeather();
}


});
