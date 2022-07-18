const express = require('express');
const fetchShareItem = require('./utils/fetchShareItem')
const fetchShareDataDaily= require('./utils/fetchShareDataDaily')


const app = express();

app.use(express.json());


app.get('/api/shareItems/:symbol', async (req, res) => {

    const shareItemFromAPI = await fetchShareItem(req.params.symbol)
    const shareDataDailyFromAPI = await fetchShareDataDaily(req.params.symbol)
    res.status(200).json({
        status: 'success',
        data: {
            shareItem: shareItemFromAPI.data,
            shareDataDaily: shareDataDailyFromAPI.data
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

