import React from 'react';
import { Link } from 'react-router-dom';
import theme from '../styles/theme';

const LandingPage = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>
          Transform Your Fitness Journey with
          <span style={styles.highlight}> AI</span>
        </h1>
        <p style={styles.subtitle}>
          Personalized workout plans, real-time coaching, and AI-powered progress tracking
        </p>
        <div style={styles.ctaButtons}>
          <Link to="/register" style={styles.primaryButton}>
            Get Started
          </Link>
          <Link to="/about" style={styles.secondaryButton}>
            Learn More
          </Link>
        </div>
      </header>

      <section style={styles.features}>
        <div style={styles.featureCard}>
          <h3 style={styles.featureTitle}>AI Coach</h3>
          <p style={styles.featureText}>
            Get personalized workout plans based on your goals
          </p>
        </div>
        <div style={styles.featureCard}>
          <h3 style={styles.featureTitle}>Real-time Tracking</h3>
          <p style={styles.featureText}>
            Monitor your progress with advanced analytics
          </p>
        </div>
        <div style={styles.featureCard}>
          <h3 style={styles.featureTitle}>Expert Support</h3>
          <p style={styles.featureText}>
            Connect with professional trainers
          </p>
        </div>
      </section>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: theme.colors.background.main,
    color: theme.colors.white,
  },
  header: {
    padding: '4rem 2rem',
    textAlign: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  title: {
    fontSize: '3.5rem',
    marginBottom: '1.5rem',
    animation: 'fadeIn 1s ease-in',
  },
  highlight: {
    color: theme.colors.primary,
  },
  subtitle: {
    fontSize: '1.2rem',
    color: theme.colors.text.secondary,
    marginBottom: '2rem',
  },
  ctaButtons: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    marginTop: '2rem',
  },
  primaryButton: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.text.dark,
    padding: '1rem 2rem',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: theme.animations.buttonHover,
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: theme.shadows.yellow,
    },
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    color: theme.colors.primary,
    padding: '1rem 2rem',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 'bold',
    border: `2px solid ${theme.colors.primary}`,
    transition: theme.animations.buttonHover,
    '&:hover': {
      backgroundColor: theme.colors.primary,
      color: theme.colors.text.dark,
      transform: 'translateY(-2px)',
    },
  },
  features: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    padding: '4rem 2rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  featureCard: {
    backgroundColor: theme.colors.background.card,
    padding: '2rem',
    borderRadius: '12px',
    textAlign: 'center',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'translateY(-10px)',
    },
  },
  featureTitle: {
    color: theme.colors.primary,
    fontSize: '1.5rem',
    marginBottom: '1rem',
  },
  featureText: {
    color: theme.colors.text.primary,
    lineHeight: 1.6,
  },
};

export default LandingPage; 