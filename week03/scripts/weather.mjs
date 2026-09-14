const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const weatherCaption = document.querySelector("figcaption");
const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=61cb3f69eabe533fee78aa023bcffbad";

apiFetch();

async function apiFetch() {
    try {
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        }
        else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    weatherIcon.setAttribute("src", `https://openweathermap.org/img/w/${data.weather[0].icon}.png`);
    weatherIcon.setAttribute("alt", data.weather[0].main);
    weatherCaption.innerHTML = data.weather[0].description;
}