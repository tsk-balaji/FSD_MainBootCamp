var apiKey = "988c5e0947d67ecb511f16235bf32ee3";
const containerDiv = document.getElementById("card");

function createCard() {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((arr) =>
      arr.sort((a, b) => a.name.common.localeCompare(b.name.common))
    )
    .then((data) => {
      for (var i = 0; i < data.length; i++) {
        const card = containerDiv.cloneNode(true);
        containerDiv.setAttribute("id", i + 1);
        document.getElementsByClassName("countryName")[i].innerHTML =
          data[i].name.common;
        document
          .getElementsByClassName("countryName")
          [i].setAttribute("id", i + 1);
        document.getElementsByClassName("card-img-top")[i].src =
          data[i].flags.png;
        const capital = data[i].capital;
        document.getElementsByClassName("capitalName")[
          i
        ].innerHTML = `Capital : ${capital}`;
        document
          .getElementsByClassName("capitalName")
          [i].setAttribute("id", i + 1);
        const region = data[i].region;
        document.getElementsByClassName("regionName")[
          i
        ].innerHTML = `Region : ${region}`;
        document
          .getElementsByClassName("regionName")
          [i].setAttribute("id", i + 1);
        const countryCode = data[i].cca3;
        document.getElementsByClassName("countryCode")[
          i
        ].innerHTML = `Country Code : ${countryCode}`;
        document
          .getElementsByClassName("countryCode")
          [i].setAttribute("id", i + 1);
        document.getElementsByClassName("btn")[i].setAttribute("id", i + 1);
        document
          .getElementsByClassName("btn")
          [i].addEventListener("click", clickedforWeather);
        document.body.appendChild(card);
      }
    });
}

createCard();

function clickedforWeather(event) {
  var buttonClicked = event.target;
  var id = buttonClicked.id;
  var capitalName =
    document.getElementsByClassName("capitalName")[id - 1].innerText;
  capitalName = capitalName.split(":")[1].trim();
  var countryCode =
    document.getElementsByClassName("countryCode")[id - 1].innerText;
  countryCode = countryCode.split(":")[1].trim();
  var geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${capitalName},,${countryCode}&limit=1&appid=${apiKey}`;
  // Fetch geolocation data
  fetch(geoUrl)
    .then((res) => res.json())
    .then((geoData) => {
      var lat = geoData[0].lat;
      var lon = geoData[0].lon;
      var weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
      // Fetch weather data
      fetch(weatherUrl)
        .then((res) => res.json())
        .then((weatherData) => {
          var temp = weatherData.main.temp;
          temp -= 273.15;
          var weather = weatherData.weather[0].description.toUpperCase();
          alert(
            `The weather in ${capitalName} : ${temp.toFixed(2)}°C (${weather})`
          );
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error);
        });
    })
    .catch((error) => {
      console.error("Error fetching geolocation data:", error);
    });
}
