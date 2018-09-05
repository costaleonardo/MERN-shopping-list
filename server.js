const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

const items = require('./routes/api/itemsRoute');

// MongoDB config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

// Body parser middleware
app.use(bodyParser.json());

// Use routes
app.use('/api/items', items);

app.listen(port, () => console.log(`Server started on port ${port}.`));


