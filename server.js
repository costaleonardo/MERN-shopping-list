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

// Serve static assets if in production
if (process.env.NODE_END === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Server started on port ${port}.`));


