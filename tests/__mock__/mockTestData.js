const shareItemMockData = {
        "shareItem": {
            "Global Quote": {
                "01. symbol": "AMZN",
                    "02. open": "112.5000",
                    "03. high": "115.5900",
                    "04. low": "111.5900",
                    "05. price": "113.5500",
                    "06. volume": "84317816",
                    "07. latest trading day": "2022-07-15",
                    "08. previous close": "110.6300",
                    "09. change": "2.9200",
                    "10. change percent": "2.6394%"
            }
        }
}
const shareDataDailyMock = {
            "Meta Data": {
                "1. Information": "Daily Prices (open, high, low, close) and Volumes",
                    "2. Symbol": "AMZN",
                    "3. Last Refreshed": "2022-07-15",
                    "4. Output Size": "Compact",
                    "5. Time Zone": "US/Eastern"
            },
            "Time Series (Daily)": {
                "2022-07-15": {
                    "1. open": "112.5000",
                        "2. high": "115.5900",
                        "3. low": "111.5900",
                        "4. close": "113.5500",
                        "5. volume": "84317816"
                },
                "2022-07-14": {
                    "1. open": "110.2400",
                        "2. high": "111.1800",
                        "3. low": "107.5800",
                        "4. close": "110.6300",
                        "5. volume": "51163140"
                },
                "2022-07-13": {
                    "1. open": "107.0300",
                        "2. high": "111.7800",
                        "3. low": "106.0100",
                        "4. close": "110.4000",
                        "5. volume": "61353812"
                },
                "2022-02-22": {
                    "1. open": "3009.5700",
                        "2. high": "3059.6500",
                        "3. low": "2969.7100",
                        "4. close": "3003.9500",
                        "5. volume": "3246383"
                }
            }
        }

const shareObjectMockOutput = {
    "shareItem": {
        "Global Quote": {
            "01. symbol": "AMZN",
            "02. open": "112.5000",
            "03. high": "115.5900",
            "04. low": "111.5900",
            "05. price": "113.5500",
            "06. volume": "84317816",
            "07. latest trading day": "2022-07-15",
            "08. previous close": "110.6300",
            "09. change": "2.9200",
            "10. change percent": "2.6394%"
        }
    },
    "Meta Data": {
        "1. Information": "Daily Prices (open, high, low, close) and Volumes",
        "2. Symbol": "AMZN",
        "3. Last Refreshed": "2022-07-15",
        "4. Output Size": "Compact",
        "5. Time Zone": "US/Eastern"
    },
    "Time Series (Daily)": {
        "2022-07-15": {
            "1. open": "112.5000",
            "2. high": "115.5900",
            "3. low": "111.5900",
            "4. close": "113.5500",
            "5. volume": "84317816"
        },
        "2022-07-14": {
            "1. open": "110.2400",
            "2. high": "111.1800",
            "3. low": "107.5800",
            "4. close": "110.6300",
            "5. volume": "51163140"
        },
        "2022-07-13": {
            "1. open": "107.0300",
            "2. high": "111.7800",
            "3. low": "106.0100",
            "4. close": "110.4000",
            "5. volume": "61353812"
        },
        "2022-02-22": {
            "1. open": "3009.5700",
            "2. high": "3059.6500",
            "3. low": "2969.7100",
            "4. close": "3003.9500",
            "5. volume": "3246383"
        }
    }

}
exports.shareItemMockData = shareItemMockData;
exports.shareDataDailyMock = shareDataDailyMock;
exports.shareObjectMockOutput = shareObjectMockOutput;

