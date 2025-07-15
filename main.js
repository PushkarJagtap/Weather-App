const city = document.getElementById("city-name")
const inputcity = document.getElementById("cityInput")
const weather = document.getElementById("currentweather")
const time = document.getElementById("obseravationTime")
// const weatherDiscription = document.getElementById("weather_discription")

const apiKey = "8b04fd047fbda4a0a3937eca6c646fbb";

async function getWeatherData(){
    const res = await fetch(`https://api.weatherstack.com/current?access_key=${"8b04fd047fbda4a0a3937eca6c646fbb"}&query=${cityInput.value}`)
    const data = await res.json();
    console.log(data);
      if (!cityInput.value) {
        alert("Enter city");
        return;
    }

    
    const name = data.location.name;
    const region = data.location.region;
    const country = data.location.country;
    const observationTime = data.current.observation_time;
    const temperature = data.current.temperature;
   

    city.innerText = `${name} (${region}) ${country}  `
    weather.innerText = `${temperature}  `
    time.innerText = `${observationTime}`


 }

