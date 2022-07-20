const fetchSearchShareResults = require('../utils/fetchSearchShareResults');

exports.getListOfSharesBySearch = async (req, res) => {
    const shareListFromApi = await fetchSearchShareResults(req.params.searchInput)
    res.status(200).json({
        numberOfResults: shareListFromApi.data.bestMatches.length,
        results: shareListFromApi.data.bestMatches
    })
}