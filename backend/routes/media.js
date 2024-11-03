const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

// @route   GET api/media
// @desc    Get all media content
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const mediaContent = [
      {
        type: 'image',
        src: '/public/images/workout-1.jpg',
        title: 'Proper Squat Form',
        description: 'Learn the correct form for squats',
        category: 'Exercise Form'
      },
      {
        type: 'video',
        src: '/public/videos/workout-tutorial.mp4',
        title: 'Full Body Workout',
        description: '30-minute complete body workout',
        category: 'Workout'
      },
      // Add more media items
    ];

    res.json(mediaContent);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router; 