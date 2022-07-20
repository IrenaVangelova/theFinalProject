const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  birthdate: {
    type: Date,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  recipes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "recipe"
  }],
  likedRecipes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "recipe"
  }],
  image: {
    type: String,
    required: false
  }
}, { timestamps: true });

module.exports = mongoose.model('user', userSchema);