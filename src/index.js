import './index.html';
import './scss/style.scss';
import getWeatherData from './js/weather';
import { handleWeatherData } from './js/utils';
import { spinners } from './js/components';

const apiKey = '';
const searchForm = document.getElementById('searchForm');
const submitButton = searchForm.querySelector('[type="submit"]');
const weatherDataEl = document.getElementById('weatherData');

searchForm.onsubmit = async (event) => {
  event.preventDefault();
  submitButton.disabled = true;
  weatherDataEl.innerHTML = spinners();

  const formData = new FormData(searchForm);
  const searchInput = formData.get('search');
  const unitInput = formData.get('unit');
  const unitSymbol = unitInput === 'metric' ? '°C' : '°F';

  await getWeatherData(searchInput, unitInput, apiKey).then((data) => {
    handleWeatherData(data, unitSymbol);
  });
  submitButton.disabled = false;
  searchForm.querySelector('[name="search"]').select();
};
