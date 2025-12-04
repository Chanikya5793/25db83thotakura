const mongoose = require("mongoose");

const costumeSchema = mongoose.Schema({
  costume_type: {
    type: String,
    required: [true, 'Costume type is required'],
    minlength: [2, 'Costume type must be at least 2 characters']
  },
  size: {
    type: String,
    enum: {
      values: ['small', 'medium', 'large', 'xlarge'],
      message: 'Size must be small, medium, large, or xlarge'
    }
  },
  color: String,
  cost: {
    type: Number,
    min: [0, 'Cost cannot be negative'],
    max: [1000, 'Cost cannot exceed 1000']
  }
});

module.exports = mongoose.model("Costume", costumeSchema);
