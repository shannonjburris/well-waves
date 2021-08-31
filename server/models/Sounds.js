const { Schema, model } = require('mongoose');

const SoundsSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "String is Required"
  },
  tags: {
    type: String
  },
  id: {
    type: Number,
    unique: true,
    required: true
  },
  link: {
    type: String
  },
  users: [
    {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
]
});

const Sounds = model("Sounds", SoundsSchema);

module.exports = Sounds;