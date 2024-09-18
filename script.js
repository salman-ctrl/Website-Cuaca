const apiKey = "3439612eb76ae33106ea2c5685f31d33";
const apiUrl= "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(kota) {
    const response = await fetch(apiUrl +kota + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    }else{
          var data =await response.json();
    console.log(data);
    document.querySelector(".kota").innerHTML=data.name;
    document.querySelector(".suhu").innerHTML=Math.round(data.main.temp) + "C°";
    document.querySelector(".humidity").innerHTML=data.main.humidity  + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "km/jam" ;

    if(data.weather[0].main =="Clouds"){
        weatherIcon.src="weather-app-img/images/clouds.png";
    } 
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src ="weather-app-img/images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src ="weather-app-img/images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src ="weather-app-img/images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src ="weather-app-img/images/mist.png"
    }

    document.querySelector(".error").style.display = "none"
    document.querySelector(".weather").style.display ="block";
  
    }

  

}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

checkWeather();