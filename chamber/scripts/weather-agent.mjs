import { getCurrentWeather, getForecast } from "./weather-courier.mjs";

const temperature = document.querySelector("#temperature");
const weatherDescription = document.querySelector("#weather-description");
const temperatureForecastArea = document.querySelector("#temperature-forecast");
const currentWeather = await getCurrentWeather();
const forecast = await getForecast();

displayWeather();

function displayWeather() {
    temperature.innerHTML = currentWeather.main.temp;
    weatherDescription.textContent = currentWeather.weather[0].description;

    const temperatureMap = getTemperatureForecast();
    let storedDate = temperatureMap.keys().next().value;
    let storedDay = storedDate.getDate();
    let minTemperature = temperatureMap.get(storedDate);
    let maxTemperature = minTemperature;

    for (const [date, temperature] of temperatureMap) {
        if (storedDay == date.getDate()) {
            if (minTemperature > temperature) {
                minTemperature = temperature;
            }
            else if (maxTemperature < temperature) {
                maxTemperature = temperature;
            }
        }
        else {
            const paragraph = document.createElement("p");
            paragraph.classList.add("little-line");
            paragraph.innerHTML = `${storedDate.toLocaleDateString()}: ${minTemperature}&deg;F-${maxTemperature}&deg;F`;
            temperatureForecastArea.appendChild(paragraph);

            storedDate = date;
            storedDay = storedDate.getDate();
            minTemperature = temperatureMap.get(storedDate);
            maxTemperature = minTemperature;
        }
    }
}

function getTemperatureForecast() {
    const temperatureMap = new Map();
    const currentDay = new Date(Date.now()).getDate();

    for (const snapshot of forecast.list) {
        const snapshotDate = new Date(snapshot.dt * 1000);
        const snapshotDay = snapshotDate.getDate();

        if (snapshotDay > currentDay && snapshotDay < currentDay + 5) {
            temperatureMap.set(snapshotDate, snapshot.main.temp);
        }
    }

    return temperatureMap;
}