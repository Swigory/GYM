const config = {
  apiUrl: process.env.NODE_ENV === 'production'
    ? 'https://your-backend-url.onrender.com'  // We'll get this after deploying
    : 'http://localhost:5000'
};

export default config; 