import weatherAPI from "./weatherAPI.js";

const weatherAPIResults = async () => {

    const { address, currentConditions, days } = await weatherAPI();

    return {
        address,
        currentConditions,
        days,
    }
}

export default weatherAPIResults;