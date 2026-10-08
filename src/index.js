import './style.css'
import { updateInfo } from './dom.js';

// Handling and passing API Requests only

const API_KEY = "2CN7NTEZVYXZFALSR3XFFK5C4";
const form = document.querySelector("form");
const inputField = document.querySelector("#weather-search");

async function getWeatherInfo(place) {
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(place)}?unitGroup=metric&key=${API_KEY}&contentType=json`);
        const weather_data = await response.json();
        displayInfo(weather_data);
    } catch (error) {
        console.error(error);
    }
}

async function displayInfo(weather_data) {
    const address = weather_data.resolvedAddress;
    const c_temp = weather_data.days[0]['temp'];
    const feelslike = weather_data.days[0]['feelslike'];
    const humidity = weather_data.currentConditions.humidity;
    const weather = weather_data.currentConditions.conditions;
    const windspeed = weather_data.currentConditions.windspeed;

    updateInfo(address, c_temp, feelslike, humidity, weather, windspeed);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    getWeatherInfo(inputField.value);
})

getWeatherInfo('Delhi');