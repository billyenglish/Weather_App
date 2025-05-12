import "./styles/styles.scss";

const currentLocation = 'Santa Barbara';

const getWeather = async () => {
    try {
        const fetchWeather = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${currentLocation}?key=PD434M7WW9DBNZ57NE8YP34A2`, { mode: "cors"})
        const weatherResult = await fetchWeather.json();
        return weatherResult;
    } catch (error) {
        console.error("Error");
    }
}

let result = await getWeather();
console.dir(result);
