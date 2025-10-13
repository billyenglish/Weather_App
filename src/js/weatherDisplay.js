import weatherAPIResult from './weatherAPIResult.js';

const weatherDisplay = async () => {

    const { address, currentConditions, days } = await weatherAPIResult();

    console.log(address);
    console.log(currentConditions);
    console.log(days);

    const weatherConditions = {};

    for (const key in currentConditions) {
        weatherConditions[key] = currentConditions[key];
    }

    console.log(weatherConditions);

    const currentLocation = document.querySelector('#current_location');
    const currentTemperature = document.querySelector('#current_temp');
    const currentWeatherIcon = document.querySelector('#weather_icon_container');
    const currentCondition = document.querySelector('#current_weather_conditions');
    const currentFeelsLikeTemperature = document.querySelector('#current_feels_like_temperature');
    const currentDayHigh = document.querySelector('#current_day_high');
    const currentDayLow = document.querySelector('#current_day_low');
    const currentHumidity = document.querySelector('#current_humidity');
    const currentWindSpeed = document.querySelector('#wind_speed');
    const currentUVIndex = document.querySelector('#uv_index');
    const currentSunrise = document.querySelector('#sunrise');
    const currentSunset = document.querySelector('#sunset');
    const currentVisibility = document.querySelector('#visibility');

    let todaySunrise = weatherConditions.sunrise;
    todaySunrise = todaySunrise.slice(1, 5);

    let todaySunset = weatherConditions.sunset;
    todaySunset = todaySunset.slice(1, 5);

    currentLocation.innerHTML = `${address}`;

    currentTemperature.innerHTML = `${weatherConditions.temp} &deg;F`;
    currentCondition.innerHTML = `${weatherConditions.conditions}`;
    currentWeatherIcon.innerHTML = ``;
    currentFeelsLikeTemperature.innerHTML = `Feels Like: ${weatherConditions.feelslike} &deg;F`;
    currentDayHigh.innerHTML = `Today's High: ${days[0].tempmax} &deg;F`;
    currentDayLow.innerHTML = `Today's Low ${days[0].tempmin} &deg;F`;
    currentHumidity.innerHTML = `Humidity: ${weatherConditions.humidity}%`;
    currentWindSpeed.innerHTML = `Wind Speed: ${weatherConditions.windspeed} mph`;
    currentUVIndex.innerHTML = `UV Index: ${weatherConditions.uvindex}`;
    currentSunrise.innerHTML = `Sunrise: ${todaySunrise} AM`;
    currentSunset.innerHTML = `Sunset: ${todaySunset} PM`;
    currentVisibility.innerHTML = `Visibility: ${weatherConditions.visibility}%`;

}

export default weatherDisplay;