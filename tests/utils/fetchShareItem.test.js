const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const fetchShareItem = require("../../utils/fetchShareItem");
const { shareItemMockData } = require('../__mock__/mockTestData');




describe("fetchShareItemFromAPI", () => {
    let mock;

    beforeAll(() => {
        mock = new MockAdapter(axios);
    });

    afterEach(() => {
        mock.reset();
    });

    describe("when API call is successful", () => {
        it("should return global quote for given share", async () => {

            // when axios get request is made on this URL
            mock.onGet("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=AMZN&apikey=undefined").reply(200, shareItemMockData);

            // call the function that retrieves the share info from the API
            const result = await fetchShareItem("AMZN");

            // then
            expect(mock.history.get[0].url).toEqual("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=AMZN&apikey=undefined");
            expect(result.data).toEqual(shareItemMockData);
        });
    });

    describe("when API call to get share info fails", () => {
        it("should return an object with an error", async () => {

            mock.onGet("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=AMZN&apikey=undefined").networkErrorOnce();


            const result = await fetchShareItem("AMZN");


            expect(mock.history.get[0].url).toEqual("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=AMZN&apikey=undefined");
            expect(result).toEqual({error: 'Something went wrong'});
        });
    });
});