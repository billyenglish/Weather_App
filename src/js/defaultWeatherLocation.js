import weatherAPI from './weatherAPI.js';

export const defaultWeatherLocation = async () => {
    const location = await weatherAPI();
    console.log(location);
    const { address, currentConditions, days } = location;
    console.log(address, currentConditions, days );
    return {
        location: address,
        conditions: currentConditions.conditions,
        temp: currentConditions.temp,
        tempFeelsLike: currentConditions.feelslike,
        highTemp: days[0].tempmax,
        lowTemp: days[0].tempmin,
        humidity: currentConditions.humidity,
        windSpeed: currentConditions.windspeed,
        visibility: currentConditions.visibility,
        uvIndex: currentConditions.uvindex,
        windSpeed: currentConditions.windspeed,
    }
}