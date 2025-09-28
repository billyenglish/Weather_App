import './styles.css'

const defaultCurrentWeatherSearch = async () => {
    try {
        const search = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Atlanta?key=PD434M7WW9DBNZ57NE8YP34A2');
        const result = await search.json();
        return result;
    } catch (err) {
        console.error(err);
    }
}

const defaultCurrentWeatherResult = async () => {
    const currentWeather = await defaultCurrentWeatherSearch();
    return currentWeather;
}


const currentWeatherResultDisplayFirstColumn = async () => {

    const weatherConditions = await defaultCurrentWeatherResult();

    console.log(weatherConditions)
    console.log(weatherConditions.currentConditions.icon)

    const currentLocationDisplay = document.querySelector('#current_location');
    const currentTemperatureDisplay = document.querySelector('#current_temperature');
    const currentWeatherIconDisplay = document.querySelector('#weather_icon');
    const currentWeatherConditionDisplay = document.querySelector('#current_weather_conditions');
    const currentFeelsLikeTemperature = document.querySelector('#current_feels_like_temperature');
    const currentTemperatureHighToday = document.querySelector('#current_day_high');
    const currentTemperatureLowToday = document.querySelector('#current_day_low');
    const currentTimeDisplay = document.querySelector('#curr_time');

    if (weatherConditions) {
        currentLocationDisplay.innerHTML = weatherConditions.resolvedAddress;
        currentTemperatureDisplay.innerHTML = `${weatherConditions.currentConditions.temp}&deg;`;
        currentWeatherIconDisplay.innerHTML = `<img src="${weatherConditions.currentConditions.icon}" width="64">`;
        currentWeatherConditionDisplay.innerHTML = `${weatherConditions.currentConditions.conditions}`;
        currentFeelsLikeTemperature.innerHTML = `Feels like ${weatherConditions.currentConditions.feelslike}&deg;`;
        currentTemperatureHighToday.innerHTML = `Today&apos;s High: ${weatherConditions.days[0].tempmax}&deg;`;
        currentTemperatureLowToday.innerHTML = `Today&apos;s Low: ${weatherConditions.days[0].tempmin}&deg;`;
        currentTimeDisplay.innerHTML = `${weatherConditions.currentConditions.datetime}`;
    }

}

currentWeatherResultDisplayFirstColumn();

const currentWeatherResultDisplaySecondColumn = async () => {

    const weatherConditions = await defaultCurrentWeatherResult();

    const currentHumidityDisplay = document.querySelector('#current_humidity');
    const currentWindSpeedDisplay = document.querySelector('#wind_speed');
    const currentUVIndexDisplay = document.querySelector('#uv_index');
    const currentSunriseTimeDisplay = document.querySelector('#sunrise');
    const currentSunsetTimeDisplay = document.querySelector('#sunset');
    const currentVisibilityDisplay = document.querySelector('#visibility');

    console.log(weatherConditions);

    if (weatherConditions) {
        currentHumidityDisplay.innerHTML = `Humidity: ${weatherConditions.currentConditions.humidity}%`;
        currentWindSpeedDisplay.innerHTML = `Wind Speed: ${weatherConditions.currentConditions.windspeed} mph`;
        currentUVIndexDisplay.innerHTML = `UV Index: ${weatherConditions.currentConditions.uvindex}`;
        currentSunriseTimeDisplay.innerHTML = `Sunrise: ${weatherConditions.currentConditions.sunrise} am`;
        currentSunsetTimeDisplay.innerHTML = `Sunset: ${weatherConditions.currentConditions.sunset} pm`;
        currentVisibilityDisplay.innerHTML = `Visibility: ${weatherConditions.currentConditions.visibility}%`;
    }

}

currentWeatherResultDisplaySecondColumn();