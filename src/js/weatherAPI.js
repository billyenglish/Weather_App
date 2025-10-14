const weatherAPI = async (location = 'New York') => {

    try {
        const search = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=Y6H3RG3LL82DAAV3MPFXLUQUB`);
        const data = await search.json();
        return data;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        throw error;
    }

}

export default weatherAPI;