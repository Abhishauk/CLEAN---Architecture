const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const DBconnect = require('./src/db/connection/db')
const productController = require("./src/routes/productrouter");

const port = 7000;
const app = express();
app.use(bodyParser.json());
app.use(cors());

DBconnect();
app.use('/',productController)

app.listen(port , () => {
    console.log("port connected");
})


module.exports = app;