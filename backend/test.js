const mongoose = require('mongoose');
const Survey = require('./models/Survey');
const connectDB = require('./config/db');

// Connect to the database
connectDB();

// Test function to create a sample survey
const createTestSurvey = async () => {
  try {
    // Create a test survey
    const testSurvey = new Survey({
      title: 'Test Survey',
      description: 'This is a test survey created by the test script',
      questions: [
        {
          questionText: 'What is your favorite programming language?',
          options: ['JavaScript', 'Python', 'Java', 'C#', 'Other'],
          isMandatory: true
        },
        {
          questionText: 'How many years of programming experience do you have?',
          options: ['Less than 1 year', '1-3 years', '3-5 years', 'More than 5 years'],
          isMandatory: false
        }
      ]
    });

    // Save the survey to the database
    await testSurvey.save();
    console.log('Test survey created successfully!');
    console.log(testSurvey);

  } catch (err) {
    console.error('Error creating test survey:', err.message);
  } finally {
    // Close the database connection
    mongoose.connection.close();
    console.log('Database connection closed');
  }
};

// Run the test
createTestSurvey();
