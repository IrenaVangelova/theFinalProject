const mongoose = require('mongoose');

const recipeSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  createdOn: {
    type: Date,
    default: new Date()
  },
  likes: {
    type: Number,
    default: 0
  },
  preparationTime: {
    type: Number,
    required: true
  },
  numberOfPeople: {
    type: Number,
    required: true
  },
  shortDescription: {
    type: String,
    required: true,
    maxLength: 150
  },
  description: {
    type: String,
    required: true
  },
  img: {
    data: Buffer,
    contentType: String
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'user'
  }
}, { timestamps: true });

module.exports = mongoose.model('recipe', recipeSchema);