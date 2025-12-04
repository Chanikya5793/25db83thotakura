const mongoose = require("mongoose");

const costumeSchema = mongoose.Schema({
  costume_type: String,
  size: String,
  color: String,
  cost: {
    type: Number,
    min: [0, 'Cost cannot be negative'],
    max: [1000, 'Cost cannot exceed 1000']
  }
});

module.exports = mongoose.model("Costume", costumeSchema);
