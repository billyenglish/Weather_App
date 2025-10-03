import { defaultWeatherLocation } from './defaultWeatherLocation.js';

const currentWeatherDisplaySecondPrimary = async () => {
    try {
        const currentConditions = await defaultWeatherLocation();
        const {
            humidity,
            windSpeed,
            uvIndex,
            sunrise,
            sunset,
            visibility
        } = currentConditions;
        console.log(sunrise)
        console.log(sunset)
        
        const selectors = {
            humidity: "#current_humidity",
            windSpeed: '#wind_speed',
            uvIndex: '#uv_index',
            visibility: '#visibility',
            sunrise: '#sunrise',
            sunset: '#sunset'
        }

        const element = {};
        for (const key in selectors) {
            element[key] = document.querySelector(selectors[key]);
        }

        element.humidity.textContent = `Humidity: ${humidity}%`;
        element.windSpeed.innerHTML = `Wind Speed: ${windSpeed} mph`;
        element.uvIndex.textContent = `UV Index: ${uvIndex}`;
        element.sunrise.textContent = `Sunrise: ${sunrise} AM`;
        element.sunset.textContent = `Sunset: ${sunset} PM`;
        element.visibility.textContent = `Visibility: ${visibility} miles`;
    } catch (error) {   
        console.error('Error fetching current weather data:', error);
    }
}

export default currentWeatherDisplaySecondPrimary;