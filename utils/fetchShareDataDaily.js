const axios = require('axios');

async function fetchShareDataDaily(symbol) {
    try {
        return await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=undefined`);
    } catch (e) {
        return {error: 'Something went wrong'};
    }
}


module.exports = fetchShareDataDaily;