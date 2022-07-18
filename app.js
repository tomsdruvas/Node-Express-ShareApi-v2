const express = require('express');
const httpClientShareItem = require('./utils/httpClient')


const app = express();

app.use(express.json());

const simpleJson = {
        "Global Quote": {
            "01. symbol": "TSCO",
            "02. open": "202.9300",
            "03. high": "204.2900",
            "04. low": "201.7500",
            "05. price": "203.2000",
            "06. volume": "976911",
            "07. latest trading day": "2022-07-15",
            "08. previous close": "201.7800",
            "09. change": "1.4200",
            "10. change percent": "0.7037%"
        }
    }
// app.get('/', (req, res) => {
//     res.status(200).json({
//         "Global Quote": {
//             "01. symbol": "TSCO",
//             "02. open": "202.9300",
//             "03. high": "204.2900",
//             "04. low": "201.7500",
//             "05. price": "203.2000",
//             "06. volume": "976911",
//             "07. latest trading day": "2022-07-15",
//             "08. previous close": "201.7800",
//             "09. change": "1.4200",
//             "10. change percent": "0.7037%"
//         }
//     })
// })
//
// app.post('/', (req, res) => {
//     res.send('You can post this endpoint')
// })


app.get('/api/shareItems/:symbol', async (req, res) => {

    let shareItemFromAPI = await httpClientShareItem(req.params.symbol)
    res.status(200).json({
        status: 'success',
        data: {
            shareItem: shareItemFromAPI
        }
    })
})
app.post('/api/shareItem', (req, res)=>{
    console.log(req.body);
    res.send('Done');
})



const port = 3000;
app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`)
})

