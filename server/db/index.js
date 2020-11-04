const mongoose = require('mongoose');

mongoose
  .set('useUnifiedTopology', true)
  .connect('mongodb://127.0.0.1:27017/checkout', {useNewUrlParser: true})
  .catch(e => {
    console.error('Connection error', e.message)
  })

const db = mongoose.connection;

module.exports = db;
