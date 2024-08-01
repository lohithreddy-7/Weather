const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey = "d1fdc6c1d6d35be8dcd434494bbe36a8";

const searchInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function changeWeather(name){
    const response = await fetch(apiUrl + name + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
    document.querySelector(".wind").innerHTML = data.wind.speed+" km/h";

    if(data.weather[0].main == 'Clouds'){
        weatherIcon.src = 'images/cloudy.png';
    }
    else if(data.weather[0].main == 'Rain'){
        weatherIcon.src = 'images/rain.png';
    }
    else if(data.weather[0].main == 'Drizzle'){
        weatherIcon.src = 'images/drizzle.png';
    }
    else if(data.weather[0].main == 'Clear'){
        weatherIcon.src = 'images/clear.png';
    }
    else if(data.weather[0].main == 'Snow'){
        weatherIcon.src = 'images/snow.png';
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
}


searchBtn.addEventListener("click", ()=>{
    changeWeather(searchInput.value);
})