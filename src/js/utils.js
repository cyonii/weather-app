import { errorAlert, weatherCard } from './components';

export function displayWeatherData(data, unit) {
  const el = document.getElementById('weatherData');
  el.innerHTML = weatherCard(data, unit);
}

export function alertError(data) {
  const el = document.getElementById('weatherData');
  el.innerHTML = errorAlert(data.message);
}

export function handleWeatherData(data, unit) {
  if (data.cod < 300) displayWeatherData(data, unit);
  else alertError(data);
}
