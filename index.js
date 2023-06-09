require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors({ origin: ['http://localhost:8080', 'https://adricsm.github.io'] }));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose
    .connect(process.env.URI)
    .then(() => {
        console.info('mongoDB connection successfully');
    })
    .catch((err) => {
        console.info(err.message);
    });

app.use(require('./router/router'));

app.listen(process.env.PORT, () => {
    console.info(`server running at port ${process.env.PORT}`);
});
