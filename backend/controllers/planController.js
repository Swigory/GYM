// Placeholder for AI logic
exports.getPlan = (req, res) => {
  const sampleWorkout = [
    { exercise: 'Push-ups', reps: '3 sets of 15' },
    { exercise: 'Squats', reps: '3 sets of 20' },
  ];
  const sampleMeals = [
    { meal: 'Breakfast', items: ['Oatmeal', 'Banana', 'Almonds'] },
    { meal: 'Lunch', items: ['Grilled Chicken', 'Brown Rice', 'Broccoli'] },
  ];
  res.json({ workout: sampleWorkout, meals: sampleMeals });
};
