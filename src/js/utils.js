import { errorAlert, weatherCard } from './components';

export function displayWeatherData(data) {
  const el = document.getElementById('weatherData');
  el.innerHTML = weatherCard(data);
}

export function alertError(data) {
  const el = document.getElementById('weatherData');
  el.innerHTML = errorAlert(data.message);
}

export function handleWeatherData(data) {
  if (data.cod < 300) displayWeatherData(data);
  else alertError(data);
}
