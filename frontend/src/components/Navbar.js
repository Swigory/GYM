import React from 'react';
import { Link } from 'react-router-dom';
import theme from '../styles/theme';

const Navbar = () => {
  const styles = {
    navbar: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: theme.colors.surface,
      boxShadow: theme.shadows.medium,
      zIndex: 1000,
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: theme.colors.primary,
      textDecoration: 'none',
    },
    nav: {
      display: 'flex',
      gap: '2rem',
      alignItems: 'center',
    },
    link: {
      textDecoration: 'none',
      color: theme.colors.text.primary,
      fontSize: '0.95rem',
      fontWeight: 500,
      padding: '0.5rem 1rem',
      borderRadius: theme.borderRadius.medium,
      transition: theme.transitions.fast,
    },
    button: {
      backgroundColor: theme.colors.primary,
      color: theme.colors.text.light,
      border: 'none',
      padding: '0.5rem 1.25rem',
      borderRadius: theme.borderRadius.medium,
      cursor: 'pointer',
      fontSize: '0.95rem',
      fontWeight: 500,
      transition: theme.transitions.fast,
    }
  };

  return (
    <nav style={styles.navbar}>
      <Link to="/" style={styles.logo}>
        AI Fitness Coach
      </Link>
      
      <div style={styles.nav}>
        <Link to="/ai-assessment" style={styles.link}>
          Start Assessment
        </Link>
        <Link to="/dashboard" style={styles.link}>
          Dashboard
        </Link>
        <button 
          style={styles.button}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = theme.colors.primaryDark;
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = theme.colors.primary;
          }}
        >
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
