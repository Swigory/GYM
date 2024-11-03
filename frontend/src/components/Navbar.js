import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import theme from '../styles/theme';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        <Link to="/" style={styles.logoLink}>
          GYM AI
        </Link>
      </div>

      {/* Mobile menu button */}
      <button 
        style={styles.menuButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Navigation links */}
      <div style={{
        ...styles.navLinks,
        ...(isOpen ? styles.navLinksOpen : styles.navLinksClosed)
      }}>
        <Link to="/dashboard" style={styles.link}>Dashboard</Link>
        <Link to="/ai-assessment" style={styles.link}>AI Coach</Link>
        <Link to="/coaches" style={styles.link}>Coaches</Link>
        <Link to="/chat" style={styles.link}>Chat</Link>
        <Link to="/profile" style={styles.link}>Profile</Link>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    backgroundColor: theme.colors.background.main,
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  logoLink: {
    color: theme.colors.primary,
    textDecoration: 'none',
    transition: 'color 0.3s ease',
    '&:hover': {
      color: theme.colors.white,
    },
  },
  navLinks: {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
  },
  link: {
    color: theme.colors.white,
    textDecoration: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: theme.colors.primary,
      color: theme.colors.background.main,
      transform: 'translateY(-2px)',
    },
  },
  menuButton: {
    display: 'none',
    '@media (max-width: 768px)': {
      display: 'block',
      background: 'none',
      border: 'none',
      color: theme.colors.white,
      fontSize: '1.5rem',
      cursor: 'pointer',
    },
  },
  navLinksOpen: {
    '@media (max-width: 768px)': {
      display: 'flex',
      flexDirection: 'column',
      position: 'absolute',
      top: '100%',
      left: 0,
      right: 0,
      backgroundColor: theme.colors.background.main,
      padding: '1rem',
    },
  },
  navLinksClosed: {
    '@media (max-width: 768px)': {
      display: 'none',
    },
  },
};

export default Navbar;
