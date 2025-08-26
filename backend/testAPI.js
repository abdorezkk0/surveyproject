const axios = require('axios');

const API_URL = 'http://localhost:5000/api/surveys';

// Test API endpoints
const testAPI = async () => {
  try {
    // Test creating a survey
    console.log('Testing POST /api/surveys...');
    const createResponse = await axios.post(API_URL, {
      title: 'API Test Survey',
      description: 'This survey was created through the API test script',
      questions: [
        {
          questionText: 'Is this API working correctly?',
          options: ['Yes', 'No', 'Maybe'],
          isMandatory: true
        },
        {
          questionText: 'How would you rate this API?',
          options: ['Excellent', 'Good', 'Average', 'Poor'],
          isMandatory: false
        }
      ]
    });
    
    console.log('Survey created successfully!');
    console.log('Survey ID:', createResponse.data._id);
    const surveyId = createResponse.data._id;
    
    // Test getting all surveys
    console.log('\nTesting GET /api/surveys...');
    const getAllResponse = await axios.get(API_URL);
    console.log(`Retrieved ${getAllResponse.data.length} surveys`);
    
    // Test getting a specific survey
    console.log('\nTesting GET /api/surveys/:id...');
    const getOneResponse = await axios.get(`${API_URL}/${surveyId}`);
    console.log('Retrieved survey title:', getOneResponse.data.title);
    
    // Test updating a survey
    console.log('\nTesting PUT /api/surveys/:id...');
    const updateResponse = await axios.put(`${API_URL}/${surveyId}`, {
      title: 'Updated API Test Survey',
      description: 'This survey was updated through the API test script',
      questions: [
        {
          questionText: 'Is this API working correctly?',
          options: ['Yes', 'No', 'Maybe', 'Definitely'],
          isMandatory: true
        },
        {
          questionText: 'How would you rate this API?',
          options: ['Excellent', 'Good', 'Average', 'Poor'],
          isMandatory: false
        }
      ]
    });
    console.log('Survey updated successfully!');
    console.log('Updated title:', updateResponse.data.title);
    
    // Test deleting a survey
    console.log('\nTesting DELETE /api/surveys/:id...');
    const deleteResponse = await axios.delete(`${API_URL}/${surveyId}`);
    console.log('Survey deleted successfully!');
    
    // Verify deletion
    console.log('\nVerifying deletion...');
    try {
      await axios.get(`${API_URL}/${surveyId}`);
    } catch (error) {
      console.log('Confirmed: Survey no longer exists');
    }
    
    console.log('\nAPI TEST COMPLETED SUCCESSFULLY');
    
  } catch (error) {
    console.error('API Test Error:', error.response ? error.response.data : error.message);
  }
};

// Run the test
console.log('Starting API tests...');
testAPI();
