const express = require("express");
const searchShareController = require("../controllers/searchShareController");

const router = express.Router();

// router.param('symbol', shareItemController.checkSymbolExists)

router
    .route('/:searchInput')
    .get(searchShareController.getListOfSharesBySearch);

module.exports = router;