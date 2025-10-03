const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

const weatherAPI = async (location = 'New York, NY') => {
    try {
        const search = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${WEATHER_API_KEY}`);
        const data = await search.json();
        return data;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        throw error;
    }
}

export default weatherAPI;