const city = document.getElementById("city-name")
const inputcity = document.getElementById("cityInput")

const apiKey = "8b04fd047fbda4a0a3937eca6c646fbb";

async function getWeatherData(){
    const res = await fetch(`http://api.weatherstack.com/current?access_key=${"8b04fd047fbda4a0a3937eca6c646fbb"}&query=${cityInput.value}`)
    const data = await res.json();
    console.log(data);
    
    const name = data.location.name;
    const region = data.location.region;
    const country = data.location.country;

    city.innerText = `${name} (${region}) ${country}`
}

