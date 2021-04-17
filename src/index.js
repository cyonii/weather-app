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
  const searchInput = event.currentTarget.querySelector('#search');

  await getWeatherData(searchInput.value, apiKey).then(handleWeatherData);
  weatherDataEl.classList.remove('d-none');
  submitButton.disabled = false;
  searchInput.select();
};
