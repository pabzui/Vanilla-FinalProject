function displayTemperature(response){
    console.log(response.data);
}


let apiKey = "2fc18d3d2a617d4f5dd286dc3cfcf411";
let apiUrl = `api.openweathermap.org/data/2.5/weather?q=San Francisco&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
