function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.weather[0].description;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.main.humidity;
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(response.data.wind.speed);
  let feelElement = document.querySelector("#feelsLike");
  feelElement.innerHTML = Math.round(response.data.main.feels_like);
}

let apiKey = "9c071107246b07f6a0b6af613b122546";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=San Diego&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
