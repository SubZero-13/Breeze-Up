const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'cb598d86e8mshfa8eebb9eb83253p1fc55djsn21b0cbd56892',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather = (city) => {
    cityName.innerHTML = city
    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            console.log(typeof (response.sunrise))
            cloud_pct.innerHTML = response.cloud_pct
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            max_temp.innerHTML = response.max_temp
            min_temp.innerHTML = response.min_temp
            sunrise.innerHTML = msToTime(response.sunrise)
            sunset.innerHTML = msToTime(response.sunset)
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            wind_degrees.innerHTML = response.wind_degrees
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
        })
        .catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(city.value);
})

getWeather("Delhi");

const msToTime = (duration) => {
    let date = new Date(duration);
    let gmtTime = date.toGMTString();
    let time = date.getUTCHours() + ":" + date.getUTCMinutes();
    return time;
}

const commonWeather = (city) => {
    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            document.getElementById(`${city}_cloud_pct`).innerHTML = response.cloud_pct
            document.getElementById(`${city}_feels_like`).innerHTML = response.feels_like
            document.getElementById(`${city}_humidity`).innerHTML = response.humidity
            document.getElementById(`${city}_max_temp`).innerHTML = response.max_temp
            document.getElementById(`${city}_min_temp`).innerHTML = response.min_temp
            document.getElementById(`${city}_sunrise`).innerHTML = msToTime(response.sunrise)
            document.getElementById(`${city}_sunset`).innerHTML = msToTime(response.sunset)
            document.getElementById(`${city}_temp`).innerHTML = response.temp
            document.getElementById(`${city}_wind_degrees`).innerHTML = response.wind_degrees
            document.getElementById(`${city}_wind_speed`).innerHTML = response.wind_speed
            
        })
        .catch(err => console.error(err));
}
commonWeather("Delhi")
commonWeather("New York")
commonWeather("Moscow")
commonWeather("Canberra")
commonWeather("Dubai")
commonWeather("London")

