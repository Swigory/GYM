import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import theme from '../styles/theme';

const AiPlan = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('workout');
  const { plan } = location.state || {};

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '100px auto',
      padding: '2rem',
    },
    header: {
      textAlign: 'center',
      marginBottom: '3rem',
    },
    title: {
      color: theme.colors.primary,
      fontSize: '2.5rem',
      marginBottom: '1rem',
    },
    subtitle: {
      color: theme.colors.text.secondary,
      fontSize: '1.2rem',
    },
    tabs: {
      display: 'flex',
      gap: '1rem',
      marginBottom: '2rem',
      borderBottom: `1px solid ${theme.colors.border}`,
    },
    tab: {
      padding: '1rem 2rem',
      cursor: 'pointer',
      borderBottom: '3px solid transparent',
      color: theme.colors.text.secondary,
      transition: theme.transitions.fast,
    },
    activeTab: {
      borderBottom: `3px solid ${theme.colors.primary}`,
      color: theme.colors.primary,
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
    },
    card: {
      backgroundColor: theme.colors.surface,
      borderRadius: theme.borderRadius.large,
      padding: '1.5rem',
      boxShadow: theme.shadows.medium,
      transition: theme.transitions.default,
    },
    cardTitle: {
      color: theme.colors.primary,
      fontSize: '1.25rem',
      marginBottom: '1rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
    },
    list: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    listItem: {
      padding: '1rem',
      borderBottom: `1px solid ${theme.colors.border}`,
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
    },
    macroChart: {
      display: 'flex',
      gap: '1rem',
      marginTop: '1rem',
    },
    macroBar: {
      flex: 1,
      height: '8px',
      borderRadius: theme.borderRadius.small,
    },
    button: {
      backgroundColor: theme.colors.primary,
      color: theme.colors.text.light,
      border: 'none',
      padding: '1rem 2rem',
      borderRadius: theme.borderRadius.medium,
      cursor: 'pointer',
      fontSize: '1rem',
      fontWeight: 500,
      transition: theme.transitions.fast,
      marginTop: '2rem',
    }
  };

  const renderWorkoutPlan = () => (
    <div style={styles.grid}>
      {plan.workout.map((day, index) => (
        <div key={index} style={styles.card}>
          <h3 style={styles.cardTitle}>
            <span>🏋️‍♂️</span> Day {index + 1}
          </h3>
          <ul style={styles.list}>
            {day.exercises.map((exercise, i) => (
              <li key={i} style={styles.listItem}>
                <div>
                  <strong>{exercise.name}</strong>
                  <p style={{ color: theme.colors.text.secondary }}>
                    {exercise.sets} sets × {exercise.reps} reps
                  </p>
                  <small style={{ color: theme.colors.text.secondary }}>
                    Rest: {exercise.rest} seconds
                  </small>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  const renderNutritionPlan = () => (
    <div style={styles.grid}>
      <div style={styles.card}>
        <h3 style={styles.cardTitle}>
          <span>📊</span> Daily Macros
        </h3>
        <div style={styles.macroChart}>
          <div 
            style={{
              ...styles.macroBar,
              backgroundColor: '#4CAF50',
              width: `${plan.nutrition.macros.protein}%`
            }}
          />
          <div 
            style={{
              ...styles.macroBar,
              backgroundColor: '#2196F3',
              width: `${plan.nutrition.macros.carbs}%`
            }}
          />
          <div 
            style={{
              ...styles.macroBar,
              backgroundColor: '#FFC107',
              width: `${plan.nutrition.macros.fats}%`
            }}
          />
        </div>
        <div style={{ marginTop: '1rem' }}>
          <p>Protein: {plan.nutrition.macros.protein}g</p>
          <p>Carbs: {plan.nutrition.macros.carbs}g</p>
          <p>Fats: {plan.nutrition.macros.fats}g</p>
        </div>
      </div>

      {plan.nutrition.meals.map((meal, index) => (
        <div key={index} style={styles.card}>
          <h3 style={styles.cardTitle}>
            <span>🍽️</span> {meal.name}
          </h3>
          <ul style={styles.list}>
            {meal.foods.map((food, i) => (
              <li key={i} style={styles.listItem}>
                <span>{food.name}</span>
                <span style={{ color: theme.colors.text.secondary }}>
                  {food.portion}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Your AI-Generated Fitness Plan</h1>
        <p style={styles.subtitle}>
          Personalized based on your body type and goals
        </p>
      </header>

      <div style={styles.tabs}>
        <div
          style={{
            ...styles.tab,
            ...(activeTab === 'workout' && styles.activeTab)
          }}
          onClick={() => setActiveTab('workout')}
        >
          Workout Plan
        </div>
        <div
          style={{
            ...styles.tab,
            ...(activeTab === 'nutrition' && styles.activeTab)
          }}
          onClick={() => setActiveTab('nutrition')}
        >
          Nutrition Plan
        </div>
      </div>

      {activeTab === 'workout' ? renderWorkoutPlan() : renderNutritionPlan()}

      <button 
        style={styles.button}
        onClick={() => window.print()}
      >
        Download Plan
      </button>
    </div>
  );
};

export default AiPlan; 