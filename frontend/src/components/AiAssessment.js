import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import theme from '../styles/theme';
import config from '../config/config';

const AiAssessment = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    height: '',
    weight: '',
    age: '',
    goals: 'Weight Loss', // Default value
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      console.log('Sending data:', formData);

      const response = await fetch(`${config.apiUrl}/api/ai/generate-plan`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      console.log('Response status:', response.status);

      const data = await response.json();
      console.log('Received data:', data);

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate plan');
      }

      navigate('/ai-plan', { state: { plan: data.plan } });
    } catch (err) {
      console.error('Error:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      {error && <div style={styles.error}>{error}</div>}
      {loading ? (
        <div style={styles.loading}>Generating your plan...</div>
      ) : (
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Height (cm)</label>
            <input
              type="number"
              value={formData.height}
              onChange={(e) => setFormData({...formData, height: e.target.value})}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Weight (kg)</label>
            <input
              type="number"
              value={formData.weight}
              onChange={(e) => setFormData({...formData, weight: e.target.value})}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Age</label>
            <input
              type="number"
              value={formData.age}
              onChange={(e) => setFormData({...formData, age: e.target.value})}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Goals</label>
            <select
              value={formData.goals}
              onChange={(e) => setFormData({...formData, goals: e.target.value})}
              style={styles.select}
            >
              <option value="Weight Loss">Weight Loss</option>
              <option value="Muscle Gain">Muscle Gain</option>
              <option value="General Fitness">General Fitness</option>
            </select>
          </div>

          <button type="submit" style={styles.button}>
            Generate Plan
          </button>
        </form>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '100px auto',
    padding: '2rem',
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
    fontSize: '1rem',
    fontWeight: 500,
  },
  input: {
    padding: '0.75rem',
    borderRadius: theme.borderRadius.medium,
    border: `1px solid ${theme.colors.border}`,
    fontSize: '1rem',
  },
  select: {
    padding: '0.75rem',
    borderRadius: theme.borderRadius.medium,
    border: `1px solid ${theme.colors.border}`,
    fontSize: '1rem',
  },
  button: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.text.light,
    padding: '1rem',
    borderRadius: theme.borderRadius.medium,
    border: 'none',
    fontSize: '1rem',
    fontWeight: 500,
    cursor: 'pointer',
  },
  error: {
    color: theme.colors.error,
    padding: '1rem',
    borderRadius: theme.borderRadius.medium,
    backgroundColor: `${theme.colors.error}10`,
    marginBottom: '1rem',
  },
  loading: {
    textAlign: 'center',
    padding: '2rem',
  }
};

export default AiAssessment;