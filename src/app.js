function displayTemperature(response){
    
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = Math.round
    (response.data.main.temp);

}


let apiKey = "2fc18d3d2a617d4f5dd286dc3cfcf411";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=San Francisco&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
