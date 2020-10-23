const mongoose = require('mongoose');

const URL = 'mongodb://localhost:27017/userdb';

mongoose.connect(URL, {
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