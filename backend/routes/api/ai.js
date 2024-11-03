const express = require('express');
const router = express.Router();
const { generateAIResponse } = require('../services/aiService');

router.post('/generate-plan', async (req, res) => {
  try {
    console.log('Received request body:', req.body);

    // Basic validation
    if (!req.body.height || !req.body.weight || !req.body.age) {
      return res.status(400).json({
        error: 'Missing required fields'
      });
    }

    const plan = await generateAIResponse(req.body);
    console.log('Generated plan:', plan);

    res.json(plan);

  } catch (error) {
    console.error('Route Error:', error);
    res.status(500).json({
      error: error.message || 'Failed to generate plan'
    });
  }
});

// Test endpoint
router.get('/test', (req, res) => {
  res.json({ message: 'AI route is working!' });
});

module.exports = router; 