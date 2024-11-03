import React from 'react';
import { Link } from 'react-router-dom';
import theme from '../styles/theme';

const Dashboard = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>AI Fitness Coach</h1>
        <p style={styles.subtitle}>Your Personal AI-Powered Fitness Journey</p>
      </header>

      <div style={styles.statsGrid}>
        <div style={styles.statCard}>
          <h3 style={styles.statTitle}>Workouts Completed</h3>
          <p style={styles.statValue}>12</p>
        </div>
        <div style={styles.statCard}>
          <h3 style={styles.statTitle}>Current Streak</h3>
          <p style={styles.statValue}>5 days</p>
        </div>
        <div style={styles.statCard}>
          <h3 style={styles.statTitle}>Progress</h3>
          <p style={styles.statValue}>85%</p>
        </div>
      </div>

      <div style={styles.actionSection}>
        <Link to="/ai-assessment" style={styles.button}>
          Generate New Plan
        </Link>
        <Link to="/workout-history" style={styles.secondaryButton}>
          View History
        </Link>
      </div>

      <div style={styles.recentActivity}>
        <h2 style={styles.sectionTitle}>Recent Activity</h2>
        <div style={styles.activityList}>
          {/* Activity items */}
          <div style={styles.activityItem}>
            <span style={styles.activityDate}>Today</span>
            <span style={styles.activityText}>Completed Upper Body Workout</span>
          </div>
          <div style={styles.activityItem}>
            <span style={styles.activityDate}>Yesterday</span>
            <span style={styles.activityText}>Updated Nutrition Plan</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: theme.spacing.xl,
    backgroundColor: theme.colors.background.main,
    minHeight: '100vh',
  },
  header: {
    textAlign: 'center',
    marginBottom: theme.spacing.xxl,
  },
  title: {
    fontSize: '2.5rem',
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.sm,
  },
  subtitle: {
    fontSize: '1.1rem',
    color: theme.colors.text.secondary,
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: theme.spacing.lg,
    marginBottom: theme.spacing.xxl,
  },
  statCard: {
    backgroundColor: theme.colors.background.card,
    padding: theme.spacing.xl,
    borderRadius: theme.borderRadius.lg,
    boxShadow: theme.shadows.md,
    transition: theme.transitions.default,
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: theme.shadows.lg,
    },
  },
  statTitle: {
    color: theme.colors.text.secondary,
    fontSize: '1rem',
    marginBottom: theme.spacing.md,
  },
  statValue: {
    color: theme.colors.text.primary,
    fontSize: '2rem',
    fontWeight: 'bold',
  },
  actionSection: {
    display: 'flex',
    gap: theme.spacing.md,
    justifyContent: 'center',
    marginBottom: theme.spacing.xxl,
  },
  button: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.text.light,
    padding: `${theme.spacing.md} ${theme.spacing.xl}`,
    borderRadius: theme.borderRadius.md,
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: theme.transitions.default,
    '&:hover': {
      backgroundColor: theme.colors.secondary,
    },
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    color: theme.colors.primary,
    padding: `${theme.spacing.md} ${theme.spacing.xl}`,
    borderRadius: theme.borderRadius.md,
    textDecoration: 'none',
    fontWeight: 'bold',
    border: `2px solid ${theme.colors.primary}`,
    transition: theme.transitions.default,
    '&:hover': {
      backgroundColor: theme.colors.primary,
      color: theme.colors.text.light,
    },
  },
  recentActivity: {
    backgroundColor: theme.colors.background.card,
    padding: theme.spacing.xl,
    borderRadius: theme.borderRadius.lg,
    boxShadow: theme.shadows.md,
  },
  sectionTitle: {
    color: theme.colors.text.primary,
    fontSize: '1.5rem',
    marginBottom: theme.spacing.lg,
  },
  activityList: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing.md,
  },
  activityItem: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing.md,
    backgroundColor: theme.colors.background.main,
    borderRadius: theme.borderRadius.md,
  },
  activityDate: {
    color: theme.colors.text.secondary,
    marginRight: theme.spacing.md,
    minWidth: '80px',
  },
  activityText: {
    color: theme.colors.text.primary,
  },
};

export default Dashboard;