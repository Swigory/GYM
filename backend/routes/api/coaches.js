const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Coach = require('../../models/Coach');
const Message = require('../../models/Message');

// @route   GET api/coaches
// @desc    Get all coaches
// @access  Public
router.get('/', async (req, res) => {
  try {
    const coaches = await Coach.find().populate('user', ['name', 'avatar']);
    res.json(coaches);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/coaches/:id
// @desc    Get coach by ID
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const coach = await Coach.findById(req.params.id).populate('user', ['name', 'avatar']);
    if (!coach) return res.status(404).json({ msg: 'Coach not found' });
    res.json(coach);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') return res.status(404).json({ msg: 'Coach not found' });
    res.status(500).send('Server Error');
  }
});

// @route   POST api/coaches/message/:id
// @desc    Send message to coach
// @access  Private
router.post('/message/:id', auth, async (req, res) => {
  try {
    const coach = await Coach.findById(req.params.id);
    if (!coach) return res.status(404).json({ msg: 'Coach not found' });

    const newMessage = new Message({
      sender: req.user.id,
      receiver: coach.user,
      message: req.body.message
    });

    await newMessage.save();
    res.json(newMessage);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router; 