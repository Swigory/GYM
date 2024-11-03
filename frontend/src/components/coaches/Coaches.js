import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Coaches = () => {
  const [coaches, setCoaches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '2rem',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      marginTop: '2rem',
    },
    card: {
      backgroundColor: 'white',
      borderRadius: '10px',
      overflow: 'hidden',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s ease',
    },
    image: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
    },
    content: {
      padding: '1.5rem',
    },
    name: {
      fontSize: '1.5rem',
      color: '#333',
      marginBottom: '0.5rem',
    },
    specialization: {
      color: '#007bff',
      marginBottom: '1rem',
    },
    bio: {
      color: '#666',
      marginBottom: '1rem',
    },
    stats: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '1rem',
    },
    button: {
      width: '100%',
      padding: '0.75rem',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    }
  };

  useEffect(() => {
    const fetchCoaches = async () => {
      try {
        const res = await axios.get('/api/coaches');
        setCoaches(res.data);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.msg || 'Error fetching coaches');
        setLoading(false);
      }
    };

    fetchCoaches();
  }, []);

  if (loading) return <div style={styles.container}>Loading...</div>;
  if (error) return <div style={styles.container}>Error: {error}</div>;

  return (
    <div style={styles.container}>
      <h1>Professional Coaches</h1>
      <div style={styles.grid}>
        {coaches.map(coach => (
          <div 
            key={coach._id} 
            style={styles.card}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <img 
              src={coach.image} 
              alt={coach.name} 
              style={styles.image}
              onError={(e) => {
                e.target.src = '/public/images/default-coach.jpg';
              }}
            />
            <div style={styles.content}>
              <h2 style={styles.name}>{coach.name}</h2>
              <p style={styles.specialization}>{coach.specialization}</p>
              <p style={styles.bio}>{coach.bio}</p>
              <div style={styles.stats}>
                <span>Experience: {coach.experience} years</span>
                <span>Rating: {coach.rating}/5</span>
              </div>
              <button 
                style={styles.button}
                onClick={() => navigate(`/coach/${coach._id}`)}
                onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
              >
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coaches; 