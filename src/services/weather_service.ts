import { Geolocation } from '@capacitor/geolocation';
import { ref } from 'vue';
import { OneWeather} from '@/model/weather-model';

const weatherUrl = 'https://api.openweathermap.org/data/2.5/onecall?';
const cityWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather?';
const APPID = '15f57edaef2d68ba68757ca6d093e6cf'; //openweathermap.org personal APIkey

const weather = ref<OneWeather>();
fetchCurrentPositionWeather();
setInterval(fetchCurrentPositionWeather, 120000);

export function useWeather() {
  return {
    weather,
    fetchCurrentPositionWeather,
    formatTemperature,
}
};

async function fetchCurrentPositionWeather() {
  const {coords} = await Geolocation.getCurrentPosition();
  let lat = coords.latitude;
  let lon = coords.longitude;
  const response = await fetch(`${weatherUrl}&lat=${lat}&lon=${lon}&exclude=minutely,hourly&APPID=${APPID}&units=metric&lang=fr`)
  weather.value = await response.json();
  return weather.value;

};

export async function getCurrentPositionName() {
  const {coords} = await Geolocation.getCurrentPosition();
  let lat = coords.latitude;
  let lon = coords.longitude;
  let response = await fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=${APPID}`)
  let position = await response.json();
  return position;
}

export function formatTemperature(value: number) {
  return `${Math.round(value)}°C`;
}

export async function getImageName() {
let weather = await fetchCurrentPositionWeather();
let imgName = weather?.current.weather[0].icon
return imgName;
}

export async function fetchCityWeather(city: string) {
  let response = await fetch(`${cityWeatherUrl}q=${city}&units=metric&lang=fr&appid=${APPID}`);
  let cityWeather = await response.json();
  return cityWeather;
}