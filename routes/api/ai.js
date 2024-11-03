const express = require('express');
const router = express.Router();
const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Add a test GET route
router.get('/generate-plan', (req, res) => {
  res.json({ message: 'AI endpoint is working!' });
});

// Main POST route for generating plans
router.post('/generate-plan', async (req, res) => {
  try {
    const { height, weight, age, goals } = req.body;
    
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are a professional fitness trainer and nutritionist."
        },
        {
          role: "user",
          content: `Create a fitness and nutrition plan for someone with these stats:
            Height: ${height}cm
            Weight: ${weight}kg
            Age: ${age}
            Goals: ${goals}
            
            Include:
            1. Weekly workout plan
            2. Nutrition guidelines
            3. Progress tracking tips`
        }
      ]
    });

    res.json({
      success: true,
      plan: completion.choices[0].message.content
    });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

module.exports = router;
