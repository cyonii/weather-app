import './index.html';
import './scss/style.scss';

const apiKey = '';

async function getWeatherData(location) {
  const baseURL = 'http://api.openweathermap.org/data/2.5/weather';
  const fullURL = `${baseURL}?q=${location}&APPID=${apiKey}`;

  await fetch(fullURL, { mode: 'cors' })
    .then((response) => response.json())
    .then((data) => console.log(data));
}

getWeatherData('Lagos');
