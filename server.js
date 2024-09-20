const UserRoute = require('./app/routes/route.js')
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const cors = require("cors")
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/',UserRoute)
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Databse Connected Successfully!!");    
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});
app.get('/', (req, res) => {
    res.json({"message": "Hello Task Management"});
});
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});

