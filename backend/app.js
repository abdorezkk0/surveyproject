const express = require('express');
const cors = require('cors');
const surveyRoutes = require('./routes/surveys');

const app = express();

// Enable CORS for frontend
app.use(cors());

// Body parser middleware
app.use(express.json());

// Mount routes
app.use('/api/surveys', surveyRoutes);

// Basic route for testing
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: 'Server Error'
  });
});

module.exports = app;