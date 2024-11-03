import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import theme from '../styles/theme';

const AiAssessment = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    height: '',
    weight: '',
    age: '',
    goals: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:5000/api/ai/generate-plan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate plan');
      }

      navigate('/ai-plan', { state: { plan: data } });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formCard}>
        <h2 style={styles.title}>AI Fitness Assessment</h2>
        <p style={styles.subtitle}>Let's create your personalized fitness plan</p>

        {error && <div style={styles.error}>{error}</div>}

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Height (cm)</label>
            <input
              type="number"
              name="height"
              value={formData.height}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Weight (kg)</label>
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Fitness Goals</label>
            <select
              name="goals"
              value={formData.goals}
              onChange={handleChange}
              style={styles.select}
              required
            >
              <option value="">Select a goal</option>
              <option value="weight-loss">Weight Loss</option>
              <option value="muscle-gain">Muscle Gain</option>
              <option value="endurance">Endurance</option>
              <option value="flexibility">Flexibility</option>
            </select>
          </div>

          <button 
            type="submit" 
            style={styles.button}
            disabled={loading}
          >
            {loading ? 'Generating Plan...' : 'Generate AI Plan'}
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: theme.colors.background.main,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
  },
  formCard: {
    backgroundColor: theme.colors.background.card,
    padding: '2rem',
    borderRadius: '12px',
    width: '100%',
    maxWidth: '500px',
    boxShadow: theme.shadows.card,
  },
  title: {
    color: theme.colors.primary,
    fontSize: '2rem',
    textAlign: 'center',
    marginBottom: '0.5rem',
  },
  subtitle: {
    color: theme.colors.text.primary,
    textAlign: 'center',
    marginBottom: '2rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  label: {
    color: theme.colors.text.primary,
    fontSize: '0.9rem',
  },
  input: {
    padding: '0.75rem',
    borderRadius: '6px',
    border: `1px solid ${theme.colors.border}`,
    backgroundColor: theme.colors.background.main,
    color: theme.colors.text.primary,
    fontSize: '1rem',
    width: '100%',
    '&:focus': {
      outline: 'none',
      borderColor: theme.colors.primary,
      boxShadow: theme.shadows.yellow,
    },
  },
  select: {
    padding: '0.75rem',
    borderRadius: '6px',
    border: `1px solid ${theme.colors.border}`,
    backgroundColor: theme.colors.background.main,
    color: theme.colors.text.primary,
    fontSize: '1rem',
    width: '100%',
    '&:focus': {
      outline: 'none',
      borderColor: theme.colors.primary,
      boxShadow: theme.shadows.yellow,
    },
  },
  button: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.text.dark,
    padding: '1rem',
    borderRadius: '6px',
    border: 'none',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: theme.animations.buttonHover,
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: theme.shadows.yellow,
    },
    '&:disabled': {
      opacity: 0.7,
      cursor: 'not-allowed',
    },
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginBottom: '1rem',
    padding: '0.5rem',
    backgroundColor: 'rgba(255, 0, 0, 0.1)',
    borderRadius: '4px',
  },
};

export default AiAssessment;