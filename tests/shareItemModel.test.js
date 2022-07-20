const mongoose = require("mongoose");
const  ShareItemModel  = require("../models/shareItemModel");
const db = require('../setup/db')

const shareItemAmazonData = {
    name: "Amazon",
    symbol: "AMZN",
    price: 20,
    updatedAt: Date.now(),
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
    it("create & save shareItem successfully", async () => {
        const shareItem = new ShareItemModel(shareItemAmazonData);
        const savedShareItem = await shareItem.save();
        // Object Id should be defined when successfully saved to MongoDB.
        expect(savedShareItem._id).toBeDefined();
        expect(savedShareItem.name).toBe(shareItemAmazonData.name);
        expect(savedShareItem.price).toBe(shareItemAmazonData.price);
    });

    // You shouldn't be able to add in any field that isn't defined in the schema
    it("insert shareItem successfully, but the field not defined in schema should be undefined", async () => {
        const shareItemWithInvalidField = new ShareItemModel({
            ...shareItemAmazonData,
            madeUpField: "Random text",
        });
        const savedShareItemWithInvalidField = await shareItemWithInvalidField.save();
        expect(savedShareItemWithInvalidField._id).toBeDefined();
        expect(savedShareItemWithInvalidField.madeUpField).toBeUndefined();
    });

    // It should tell us if any required field is left empty
    it("create user without required field should failed", async () => {
        const shareItemWithoutRequiredField = new ShareItemModel({
            name: "Amazon",
            price: "20",
            updatedAt: Date.now(),
        });
        let err;
        try {
            const savedShareItemWithoutRequiredField = await shareItemWithoutRequiredField.save();
        } catch (error) {
            err = error;
        }
        expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
        expect(err.errors.symbol).toBeDefined();
    });


});