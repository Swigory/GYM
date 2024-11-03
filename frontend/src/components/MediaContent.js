import React from 'react';

const MediaContent = () => {
  const styles = {
    container: {
      padding: '2rem',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    header: {
      textAlign: 'center',
      marginBottom: '2rem',
      color: '#333',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      marginBottom: '3rem',
    },
    card: {
      backgroundColor: 'white',
      borderRadius: '10px',
      overflow: 'hidden',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s ease',
    },
    cardHover: {
      transform: 'translateY(-5px)',
    },
    image: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
    },
    video: {
      width: '100%',
      height: 'auto',
    },
    content: {
      padding: '1rem',
    },
    title: {
      fontSize: '1.2rem',
      color: '#333',
      marginBottom: '0.5rem',
    },
    description: {
      color: '#666',
      fontSize: '0.9rem',
    },
    category: {
      display: 'inline-block',
      padding: '0.25rem 0.75rem',
      backgroundColor: '#007bff',
      color: 'white',
      borderRadius: '15px',
      fontSize: '0.8rem',
      marginTop: '1rem',
    }
  };

  const mediaContent = [
    {
      type: 'image',
      src: '/public/images/workout-1.jpg',
      title: 'Proper Squat Form',
      description: 'Learn the correct form for squats',
      category: 'Exercise Form'
    },
    {
      type: 'video',
      src: '/public/videos/workout-tutorial.mp4',
      title: 'Full Body Workout',
      description: '30-minute complete body workout',
      category: 'Workout'
    },
    {
      type: 'image',
      src: '/public/images/meal-prep.jpg',
      title: 'Meal Preparation',
      description: 'Healthy meal prep ideas',
      category: 'Nutrition'
    },
    // Add more media items as needed
  ];

  const MediaCard = ({ item }) => (
    <div 
      style={styles.card}
      onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
      onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
    >
      {item.type === 'image' ? (
        <img
          src={item.src}
          alt={item.title}
          style={styles.image}
          onError={(e) => {
            e.target.src = '/public/images/placeholder.jpg'; // Fallback image
          }}
        />
      ) : (
        <video
          style={styles.video}
          controls
        >
          <source src={item.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      <div style={styles.content}>
        <h3 style={styles.title}>{item.title}</h3>
        <p style={styles.description}>{item.description}</p>
        <span style={styles.category}>{item.category}</span>
      </div>
    </div>
  );

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Training Resources</h2>
      <div style={styles.grid}>
        {mediaContent.map((item, index) => (
          <MediaCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MediaContent; 