// DOM Update method here

import clear from "./images/clear.svg";
import cloudy from "./images/cloudy.svg";
import fog from "./images/fog.svg";
import mist from "./images/mist.svg";
import hail from "./images/hail.svg";

const address_field = document.querySelector("#address");
const temp_field = document.querySelector("#temp");
const feels_like_field = document.querySelector("#feels-like");
const humidity_field = document.querySelector("#humidity");
const weather_field = document.querySelector("#weather");
const windspeed_field = document.querySelector('#windspeed');
const weather_icon = document.querySelector('#weather-icon');

const iconMap = {
    Clear: clear,
    Sunny: clear,
    Cloudy: cloudy,
    "Partially cloudy": cloudy,
    Overcast: cloudy,
    Fog: fog,
    Mist: mist,
    Snow: hail,
    Hail: hail,
    "Rain, Partially cloudy": hail,
    Rain: hail,
    Drizzle: hail
};

export function updateInfo (address, temp, feels_like, humidity, weather, windspeed) {
    weather_field.textContent = `${weather}`;
    address_field.textContent = `📍${address}`;
    temp_field.textContent = `${temp}°C`;
    feels_like_field.textContent = `Feels Like ${feels_like}°C`;
    humidity_field.textContent = `${humidity}%`;
    windspeed_field.textContent = `${windspeed} km/h`;
    weather_icon.innerHTML = `
    <img src="${iconMap[weather] || cloudy}" alt="${weather}">`;
}