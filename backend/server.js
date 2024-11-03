const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Enable CORS for all origins in development
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? 'https://your-frontend-url.netlify.app'  // We'll get this URL after deploying frontend
    : 'http://localhost:3000'
}));

app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'AI Fitness API is running!' });
});

app.use('/api/ai', require('./routes/api/ai'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});