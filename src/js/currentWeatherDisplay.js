import { defaultWeatherLocation } from './defaultWeatherLocation'

const currentWeatherDisplay = async () => {
    const currentConditions = await defaultWeatherLocation();

    const { location, temp } = currentConditions;

    const currentLocation = document.querySelector('#current_location');
    const currentTemperature = document.querySelector('#current_temperature');
    const currrentWeatherConditions = document.querySelector('#current_weather_conditions');
    
    if (currentConditions) {
        currentLocation.innerHTML = `${location}`;
        currentTemperature.innerHTML = `${temp}&deg; F`;
    }
} 

export default currentWeatherDisplay;