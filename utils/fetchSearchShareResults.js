const axios = require('axios');

async function fetchSearchShareResults (searchInput) {
    try {
        return await axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchInput}&apikey=undefined`);
    } catch (e) {
        return {error: 'Something went wrong'};
    }
}


module.exports = fetchSearchShareResults;