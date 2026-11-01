const apiKey = "36967f7e787be9d023fd5f4788480f26";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector("#cityInput");
const searchButton = document.querySelector("#searchButton");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status === 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    const data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML =
      Math.round(data.main.temp) + "ºC";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main === "Clouds") {
      weatherIcon.Src = "images/clouds.png";
    } else if (data.weather[0].main === "Clear") {
      weatherIcon.Src = "images/clear.png";
    } else if (data.weather[0].main === "Rain") {
      weatherIcon.Src = "images/rain.png";
    } else if (data.weather[0].main === "Drizzle") {
      weatherIcon.Src = "images/drizzle.png"
    } else if (data.weather[0].main === "Mist") {
      weatherIcon.Src = "images/mist.png  "
    }

    document.querySelector(".weather").style.display = "block"
    document.querySelector(".error").style.display = "none"
  }
}

searchButton.addEventListener("click", () => {
  checkWeather(searchBox.value);
})

searchBox.addEventListener("keypress", (e) => {
  if (e.key === "Enter") 
    checkWeather(searchBox.value);
})