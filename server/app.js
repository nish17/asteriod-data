const express = require('express');
const bodyParser = require('body-parser');

const db = require('./helper/db');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server is up and running on ${PORT}`));
