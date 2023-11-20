const apiKey = "806a7cbc2ca6267e9a7dc14e29de3c2a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const whetherPic = document.querySelector(".weather-icon");
async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    const data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
        if(data.weather[0].main == "Clouds"){
            whetherPic.src = "assets/images/clouds.png"
        }
        else if(data.weather[0].main =="Clear"){
            whetherPic.src = "assets/images/clear.png"
        }
        else if(data.weather[0].main =="Rain"){
            whetherPic.src = "assets/images/rain.png"
        }
        else if(data.weather[0].main =="Haze"){
            whetherPic.src = "assets/images/clear.png"
         }
        else if(data.weather[0].main =="Drizzle"){
            whetherPic.src = "assets/images/drizzle.png"
        }
}
searchBtn.addEventListener("click",function(){
    checkWeather(searchBox.value);
})
