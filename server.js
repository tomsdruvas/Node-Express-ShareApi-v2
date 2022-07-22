
const mongoose = require('mongoose');

const app = require('./app')
const DB = "mongodb://localhost:27017/";
mongoose.connect(DB, {
    useNewUrlParser: true,


    }
).then( () => console.log("DB connection successful!")
);

const port = 3000;
app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`)
})
