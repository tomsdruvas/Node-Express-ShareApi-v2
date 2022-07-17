const mongoose = require("mongoose");
const ShareItemModel = require("../shareItemModel");
const ShareDataDailyModel = require("../shareDataDailyModel");
const db = require('../../setup/db')

const shareItemAmazonData = {
    name: "Amazon",
    symbol: "AMZN",
    price: 20,
    updatedAt: Date.now(),
};

let shareDataDailyAmazon = {
    shareItem: null,
    updatedAt: Date.now(),
    data: {
    "2022-07-15": {
        "1. open": "149.7800",
            "2. high": "150.8600",
            "3. low": "148.2000",
            "4. close": "150.1700",
            "5. volume": "76259931"
    },
    "2022-07-14": {
        "1. open": "144.0800",
            "2. high": "148.9500",
            "3. low": "143.2500",
            "4. close": "148.4700",
            "5. volume": "78140744"
    }}
};

beforeAll(async () => {
    await db.setUp();
});

afterEach(async () => {
    await db.dropCollections();
});

afterAll(async () => {
    await db.dropDatabase();
});

/**
 * ShareItemModel model
 */
describe("ShareItem model", () => {
    it("create & save shareDataDaily successfully", async () => {
        const shareItem = new ShareItemModel(shareItemAmazonData);
        const savedShareItem = await shareItem.save();
        shareDataDailyAmazon.shareItem = savedShareItem._id.toString();
        const shareDataDaily = new ShareDataDailyModel(shareDataDailyAmazon);
        const savedShareDataDaily = await shareDataDaily.save();

        // Object Id should be defined when successfully saved to MongoDB.
        expect(savedShareDataDaily._id).toBeDefined();
        expect(savedShareDataDaily.shareItem).toBeDefined();
        expect(savedShareItem._id.toString()).toBe(savedShareDataDaily.shareItem.toString());
        expect(savedShareDataDaily.data["2022-07-14"]["1. open"]).toBe(shareDataDailyAmazon.data["2022-07-14"]["1. open"]);
    });
});