const mongoose = require('mongoose');

const config = require('../config.json');

mongoose.connect(config.connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection

db.on('error', err => {
  console.log('DB ERROR: ',err);
});

db.once('open', () => {
  console.log('Database connection established');
})

module.exports = db;