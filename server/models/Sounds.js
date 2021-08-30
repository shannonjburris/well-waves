const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SoundsSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "String is Required"
  },

  length: {
    type: Number,
    required: true
  },

  tags: {
    type: String
  },
  
  id: {
    type: Number,
    unique: true,
    required: true
  }
});

const Sounds = mongoose.model("Sounds", SoundsSchema);

module.exports = Sounds;