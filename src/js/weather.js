export default async function getWeatherData(location, apiKey) {
  const baseURL = 'http://api.openweathermap.org/data/2.5/weather';
  const fullURL = `${baseURL}?q=${location}&APPID=${apiKey}`;

  return fetch(fullURL, { mode: 'cors' }).then((response) => response.json());
}
