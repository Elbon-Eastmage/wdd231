const currentURL = "https://api.openweathermap.org/data/2.5/weather?lat=40.39&lon=-111.85&units=imperial&appid=61cb3f69eabe533fee78aa023bcffbad";
const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?lat=40.39&lon=-111.85&units=imperial&appid=61cb3f69eabe533fee78aa023bcffbad";

export async function getCurrentWeather() {
    const answer = await fetch(currentURL);
    const data = await answer.json();

    return data;
}

export async function getForecast() {
    const answer = await fetch(forecastURL);
    const data = await answer.json();

    return data;
}