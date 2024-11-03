const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { generateWorkoutPlan, generateMealPlan } = require('../services/aiService');

// @route   GET api/plan
// @desc    Get personalized workout and meal plan
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    // In a real application, you would get these from user preferences stored in DB
    const userPreferences = {
      level: 'beginner',
      type: 'strength',
      goal: 'weightLoss'
    };

    const workoutPlan = generateWorkoutPlan(userPreferences);
    const mealPlan = generateMealPlan(userPreferences);

    res.json({
      success: true,
      plan: {
        workout: workoutPlan,
        meals: Object.values(mealPlan)
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/plan/preferences
// @desc    Update user preferences for AI planning
// @access  Private
router.post('/preferences', auth, async (req, res) => {
  try {
    const { level, type, goal } = req.body;
    
    // Validate preferences
    if (!['beginner', 'intermediate'].includes(level) ||
        !['strength', 'cardio'].includes(type) ||
        !['weightLoss', 'muscleGain'].includes(goal)) {
      return res.status(400).json({ msg: 'Invalid preferences' });
    }

    // In a real application, save these preferences to user's profile in DB
    const userPreferences = { level, type, goal };
    
    // Generate new plans based on updated preferences
    const workoutPlan = generateWorkoutPlan(userPreferences);
    const mealPlan = generateMealPlan(userPreferences);

    res.json({
      success: true,
      plan: {
        workout: workoutPlan,
        meals: Object.values(mealPlan)
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router; 