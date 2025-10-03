import { defaultWeatherLocation } from './defaultWeatherLocation'

const currentWeatherDisplayFirstPrimary = async () => {
    try {
        const currentConditions = await defaultWeatherLocation();
        
        if (!currentConditions) return;

        const {
            location,
            temp,
            conditions,
            tempFeelsLike,
            highTemp,
            lowTemp,
            datetime
        } = currentConditions;

        const timeAPI = datetime;

        const selectors = {
            currentLocation: '#current_location',
            currentTemp: '#current_temp',
            currentWeatherConditions: '#current_weather_conditions',
            currentFeelsLikeTemperature: '#current_feels_like_temperature',
            currentHighTemp: '#current_day_high',
            currentLowTemp: '#current_day_low',
            currentDateTime: '#curr_time'
        }

        const elements = {};
        for (const [key, selector] of Object.entries(selectors)) {
            elements[key] = document.querySelector(selector);
        }

        elements.currentLocation.innerHTML = `${location}`;
        elements.currentTemp.innerHTML = `${temp} &deg;F`;
        elements.currentWeatherConditions.innerHTML = `${conditions}`;
        elements.currentFeelsLikeTemperature.innerHTML = `Feels like: ${tempFeelsLike} &deg;F`;
        elements.currentHighTemp.innerHTML = `Today's High: ${highTemp} &deg;F`;
        elements.currentLowTemp.innerHTML = `Today's Low: ${lowTemp} &deg;F`;
        
    } catch (error) {
        console.error('Error fetching weather location:', error);
    }
} 

export default currentWeatherDisplayFirstPrimary;