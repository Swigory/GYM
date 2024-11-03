import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [plan, setPlan] = useState(null);

  useEffect(() => {
    const fetchPlan = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('/api/plan', {
          headers: { Authorization: token },
        });
        setPlan(res.data);
      } catch (err) {
        console.error(err.response.data);
      }
    };
    fetchPlan();
  }, []);

  if (!plan) return <div>Loading...</div>;

  return (
    <div>
      <h2>Your Workout Plan</h2>
      {plan.workout.map((exercise, index) => (
        <div key={index}>
          <h3>{exercise.exercise}</h3>
          <p>{exercise.reps}</p>
        </div>
      ))}

      <h2>Your Meal Plan</h2>
      {plan.meals.map((meal, index) => (
        <div key={index}>
          <h3>{meal.meal}</h3>
          <ul>
            {meal.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
