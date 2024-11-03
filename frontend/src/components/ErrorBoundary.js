import React from 'react';
import theme from '../styles/theme';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '2rem',
          textAlign: 'center',
          color: theme.colors.error
        }}>
          <h2>Something went wrong</h2>
          <p>{this.state.error.message}</p>
          <button
            onClick={() => window.location.reload()}
            style={{
              backgroundColor: theme.colors.primary,
              color: theme.colors.text.light,
              padding: '0.5rem 1rem',
              borderRadius: theme.borderRadius.medium,
              border: 'none',
              marginTop: '1rem',
              cursor: 'pointer'
            }}
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 