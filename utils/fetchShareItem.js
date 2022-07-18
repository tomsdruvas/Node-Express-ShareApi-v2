const axios = require('axios');

async function fetchShareItem (symbol) {
    try {
        return await axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=undefined`);
    } catch (e) {
        return {error: 'Something went wrong'};
    }
}


module.exports = fetchShareItem;