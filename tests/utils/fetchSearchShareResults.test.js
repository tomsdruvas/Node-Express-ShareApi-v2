const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const fetchSearchShareResults = require("../../utils/fetchSearchShareResults");
const { searchShareMockData } = require('../__mock__/mockTestData');




describe("fetch search results from search endpoint API", () => {
    let mock;

    beforeAll(() => {
        mock = new MockAdapter(axios);
    });

    afterEach(() => {
        mock.reset();
    });

    describe("when API call is successful", () => {
        it("should return a list of search results", async () => {

            // when axios get request is made on this URL
            mock.onGet("https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=amazon&apikey=undefined").reply(200, searchShareMockData);

            // call the function that retrieves the share info from the API
            const result = await fetchSearchShareResults("amazon");

            // then
            expect(mock.history.get[0].url).toEqual("https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=amazon&apikey=undefined");
            expect(result.data).toEqual(searchShareMockData);
        });
    });

    describe("when API call to get share info fails", () => {
        it("should return an object with an error", async () => {

            mock.onGet("https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=amazon&apikey=undefined").networkErrorOnce();


            const result = await fetchSearchShareResults("amazon");


            expect(mock.history.get[0].url).toEqual("https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=amazon&apikey=undefined");
            expect(result).toEqual({error: 'Something went wrong'});
        });
    });
});