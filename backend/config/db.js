// MongoDB connection setup
const mongoose = require('mongoose');

// Connect to MongoDB
const connectDB = async () => {
  try {
    // If you're using MongoDB Atlas, replace this connection string with your Atlas URI
    const conn = await mongoose.connect('mongodb://localhost:27017/surveyDB', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;