export default async function getWeatherData(location, unit, apiKey) {
  const baseURL = 'http://api.openweathermap.org/data/2.5/weather';
  const fullURL = `${baseURL}?q=${location}&APPID=${apiKey}&units=${unit}`;

  return fetch(fullURL, { mode: 'cors' }).then((response) => response.json());
}
