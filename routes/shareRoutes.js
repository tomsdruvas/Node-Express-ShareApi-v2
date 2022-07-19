const express = require("express");
const shareItemController = require("../controllers/shareItemController");

const router = express.Router();

router.param('symbol', shareItemController.checkSymbolExists)

router
    .route('/:symbol')
    .get(shareItemController.getShareBySymbol);

module.exports = router;