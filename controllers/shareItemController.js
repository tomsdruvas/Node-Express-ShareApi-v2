const fetchShareItem = require("../utils/fetchShareItem");
const fetchShareDataDaily = require("../utils/fetchShareDataDaily");

exports.getShareBySymbol = async (req, res) => {
    // if(res.locals.existingSymbol){
    //     return res.status(200).json({
    //         requestedAt: req.requestTime,
    //         status: 'success',
    //         data: {
    //             shareItem: res.locals.existingSymbol,
    //             shareDataDaily: res.locals.existingSymbol
    //         }
    //     })
    // }

    const shareItemFromAPI = await fetchShareItem(req.params.symbol)
    const shareDataDailyFromAPI = await fetchShareDataDaily(req.params.symbol)
    res.status(200).json({
        status: 'success',
        data: {
            shareItem: shareItemFromAPI.data,
            shareDataDaily: shareDataDailyFromAPI.data
        }
    })
}

exports.checkSymbolExists = async (req, res, next, val) => {
    console.log(`Share symbol you have typed in is ${val}, lets check if it already exists in the database`)
    //add logic to check if the share already exists in the DB
    //if it doesn't create it and next it
    //if it does just next it

    res.locals.existingSymbol = {message: 'This symbol already exists in the DB and this is where it is stored'};
    next();
}

