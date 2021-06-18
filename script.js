
// Api Section :: Fetching Data and Showing it.

let weather = {

    apikey: "d3f05b5c93a31fda525c50b8444de109",
    fetchWeather: function (city) {
        fetch("http://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&units=metric&appid=" 
        + this.apikey).then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon , description } = data.weather[0];
        const { temp , humidity } = data.main;
        const { speed } = data.wind;
        // console.log(name,icon,description,temp,humidity,speed)

        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/"+ icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp +"°C";
        document.querySelector(".humidity").innerText = "Humidity :" + humidity +"%";
        document.querySelector(".wind").innerText = "Wind Speed:" +speed +" km/h";

        document.querySelector(".weather").classList.remove("loading");

        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";

    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-box").value);
    }
}


// Search Box section 

document.querySelector(".search button")
.addEventListener("click", function () {
    weather.search();
})

document.querySelector(".search-box").addEventListener("keyup", function (event) {
    if(event.key == "Enter"){
        weather.search();
    }
})


weather.fetchWeather("Kolkata")