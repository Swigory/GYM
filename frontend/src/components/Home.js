import React from 'react';
import { useNavigate } from 'react-router-dom';
import theme from '../styles/theme';

const Home = () => {
  const navigate = useNavigate();

  const styles = {
    container: {
      minHeight: '100vh',
      background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
      color: theme.colors.text.light,
    },
    hero: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '8rem 2rem',
      textAlign: 'center',
    },
    title: {
      fontSize: '3.5rem',
      marginBottom: '1.5rem',
      fontWeight: 'bold',
    },
    subtitle: {
      fontSize: '1.5rem',
      marginBottom: '3rem',
      opacity: 0.9,
    },
    button: {
      backgroundColor: 'white',
      color: theme.colors.primary,
      padding: '1.25rem 2.5rem',
      borderRadius: theme.borderRadius.medium,
      fontSize: '1.2rem',
      fontWeight: 'bold',
      border: 'none',
      cursor: 'pointer',
      transition: theme.transitions.fast,
      boxShadow: theme.shadows.medium,
    },
    features: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      padding: '4rem 2rem',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    featureCard: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      padding: '2rem',
      borderRadius: theme.borderRadius.large,
      backdropFilter: 'blur(10px)',
      textAlign: 'center',
    },
    icon: {
      fontSize: '3rem',
      marginBottom: '1rem',
    },
    featureTitle: {
      fontSize: '1.5rem',
      marginBottom: '1rem',
    },
    featureText: {
      opacity: 0.9,
      lineHeight: 1.6,
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.hero}>
        <h1 style={styles.title}>
          Your AI-Powered<br />Fitness Journey Starts Here
        </h1>
        <p style={styles.subtitle}>
          Get personalized workout and nutrition plans based on your unique body type and goals
        </p>
        <button 
          style={styles.button}
          onClick={() => navigate('/ai-assessment')}
          onMouseOver={(e) => {
            e.target.style.transform = 'translateY(-5px)';
            e.target.style.boxShadow = theme.shadows.large;
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = theme.shadows.medium;
          }}
        >
          Start Your AI Assessment
        </button>
      </div>

      <div style={styles.features}>
        <div style={styles.featureCard}>
          <div style={styles.icon}>🤖</div>
          <h2 style={styles.featureTitle}>AI-Powered Analysis</h2>
          <p style={styles.featureText}>
            Our advanced AI analyzes your body metrics and goals to create the perfect fitness plan
          </p>
        </div>

        <div style={styles.featureCard}>
          <div style={styles.icon}>📊</div>
          <h2 style={styles.featureTitle}>Custom Nutrition</h2>
          <p style={styles.featureText}>
            Get personalized meal plans based on your body type and fitness goals
          </p>
        </div>

        <div style={styles.featureCard}>
          <div style={styles.icon}>💪</div>
          <h2 style={styles.featureTitle}>Smart Workouts</h2>
          <p style={styles.featureText}>
            Receive tailored workout routines that adapt to your progress
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home; 