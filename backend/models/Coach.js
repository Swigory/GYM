const mongoose = require('mongoose');

const CoachSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  name: {
    type: String,
    required: true
  },
  specialization: {
    type: String,
    required: true
  },
  experience: {
    type: Number,
    required: true
  },
  bio: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    default: 0
  },
  reviews: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user'
    },
    text: String,
    rating: Number,
    date: {
      type: Date,
      default: Date.now
    }
  }],
  availability: [{
    day: String,
    slots: [String]
  }],
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    default: 'default-coach.jpg'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('coach', CoachSchema); 