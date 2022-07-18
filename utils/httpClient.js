const axios = require('axios');


async function httpClientShareItem (symbol) {
    const shareItemApiUrl = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=undefined`;
    const shareDataDailyApiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=undefined`;
    const shareItem = await axios.get(shareItemApiUrl);
    const shareDataDaily = await axios.get(shareDataDailyApiUrl);


    return {
        shareItem: shareItem.data,
        shareDataDaily: shareDataDaily.data
    }
}


module.exports = httpClientShareItem;