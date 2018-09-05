const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

// Body parser middleware
app.use(bodyParser.json());

app.listen(port, () => console.log(`Server started on port ${port}.`));


