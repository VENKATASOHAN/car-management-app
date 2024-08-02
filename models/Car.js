const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  name: String,
  manufacturingYear: Number,
  price: Number
});

module.exports = mongoose.model('Car', carSchema);
