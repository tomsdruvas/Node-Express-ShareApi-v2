jest.mock('axios');
const axios = require('axios');
const getResponseData = require('./mockTestData');
const { httpClient } = require('../utils/httpClient');
const { Response } = jest.requireActual('axios');



describe('GET shareItem and shareData returned from http client', () => {
    it('should return mock object', () => {
        axios.mockRes
    });
});