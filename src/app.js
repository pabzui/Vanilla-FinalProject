function formatDate(timestamp) {
    
    let date = new Date (timestamp);
    let hours = date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    let days = ["Sunday", "Monday", "Tuesday", " Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days [date.getDay()];
    return `${day} ${hours}:${minutes}`;
  }


function displayTemperature(response){
    
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let dateElement = document.querySelector("#date");
    let iconElement = document.querySelector("#icon");
    temperatureElement.innerHTML = Math.round
    (response.data.main.temp);
    cityElement.innerHTML = response.data.name;
    descriptionElement.innerHTML = response.data.weather[0].description;
    humidityElement.innerHTML = response.data.main.humidity;
    windElement.innerHTML = Math.round 
    (response.data.wind.speed);
    dateElement.innerHTML = formatDate(response.data.dt * 1000);
    iconElement.setAttribute(
        "src",
        `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
     iconElement.setAttribute(
         "alt", response.data.weather[0].description);
}

function searchLocation(position) {
  let apiKey = "2fc18d3d2a617d4f5dd286dc3cfcf411";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeatherCondition);
    apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(dispalyForecast);
}
function displayForecast(response){
    let forecastElement = document.querySelector("#forecast");
    
    forecastElement.innerHTML= `<div class="col-2">
                <div class="card" style="width: 10rem;">
                    
                    <div class="card-body">
                        <h5 class="card-title">12:00</h5>
                        <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="">

                        <p class="card-text">
                        <div><strong>23°c </strong> || 13°c</div>
                    </div>
                </div>
            </div>`;

}

function search(city){
    let apiKey = "2fc18d3d2a617d4f5dd286dc3cfcf411";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayTemperature);

    apiUrl=`api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIkey}&units=metric`;
    axios.get(apiUrl).then(displayForcast)
}


function handleSubmit(event){
    event.preventDefault();
    let cityInputElement = document.querySelector("#city-input");
    search(cityInputElement.value);
}

search("Calgary");

let form = document.querySelector("#search-form");
form.addEventListener("sumbit", handleSubmit);
