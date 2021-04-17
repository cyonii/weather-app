export function weatherCard(data) {
  console.log(data);
  const iconURL = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  return `
  <div class="card weather-card border-0">
    <div class="card-header">
      <h5 class="mb-0 fw-light">
        Weather update for <b class="fw-bold">${data.name}, ${data.sys.country}</b>
      </h5>
    </div>
    <div class="card-body row gx-1">
      <div class="col-6 col-lg-4 col-xl-3 mb-3">
        <h6>Main Info</h6>
        <p class="mb-0"><span>Feels like:</span> <b>${data.main.feels_like}</b></p>
        <p class="mb-0"><span>Humidity:</span> <b>${data.main.humidity}</b></p>
        <p class="mb-0"><span>Pressure:</span> <b>${data.main.pressure}</b></p>
        <p class="mb-0"><span>Temperature:</span> <b>${data.main.temp}</b></p>
        <p class="mb-0"><span>Max Temp:</span> <b>${data.main.temp_max}</b></p>
        <p class="mb-0"><span>Min Temp:</span> <b>${data.main.temp_min}</b></p>
      </div>

      <div class="col-6 col-lg-4 col-xl-3 mb-3">
        <h6>Weather Info</h6>
        <div class="weather-icon-wrapper">
          <img src="${iconURL}">
        </div>
        <p class="mb-0">
          <span>Weather:</span>
          <b>${data.weather[0].main}</b>
        </p>
        <p class="mb-0"><span>Description:</span> <b>${data.weather[0].description}</b></p>
      </div>

      <div class="col-6 col-lg-4 col-xl-3 mb-3">
        <h6>Coordinates</h6>
        <p class="mb-0"><span>Latitude:</span> <b>${data.coord.lat}</b></p>
        <p class="mb-0"><span>Longitude:</span> <b>${data.coord.lon}</b></p>
      </div>

      <div class="col-6 col-lg-4 col-xl-3 mb-3">
        <h6>Wind Info</h6>
        <p class="mb-0"><span>Degrees:</span> <b>${data.wind.deg}</b></p>
        <p class="mb-0"><span>Gust:</span> <b>${data.wind.gust}</b></p>
        <p class="mb-0"><span>Speed:</span> <b>${data.wind.speed}</b></p>
      </div>
    </div>
  </div>`;
}

export function errorAlert(message) {
  return `<div class="alert alert-danger" role="alert">${message}</div>`;
}

export function spinners() {
  return `
    <div class="text-center">
      <div class="spinner-grow text-dark" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  `;
}
