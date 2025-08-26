// API service for backend communication
const API_URL = 'http://localhost:5000/api';

// Create a new survey
export const createSurvey = async (surveyData) => {
  try {
    const response = await fetch(`${API_URL}/surveys`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(surveyData)
    });

    if (!response.ok) {
      throw new Error('Failed to create survey');
    }

    return await response.json();
  } catch (error) {
    console.error('Error creating survey:', error);
    throw error;
  }
};

// Get all surveys
export const getSurveys = async () => {
  try {
    const response = await fetch(`${API_URL}/surveys`);

    if (!response.ok) {
      throw new Error('Failed to fetch surveys');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching surveys:', error);
    throw error;
  }
};

// Get a single survey by ID
export const getSurvey = async (id) => {
  try {
    const response = await fetch(`${API_URL}/surveys/${id}`);

    if (!response.ok) {
      throw new Error('Failed to fetch survey');
    }

    return await response.json();
  } catch (error) {
    console.error(`Error fetching survey ${id}:`, error);
    throw error;
  }
};

// Update a survey
export const updateSurvey = async (id, surveyData) => {
  try {
    const response = await fetch(`${API_URL}/surveys/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(surveyData)
    });

    if (!response.ok) {
      throw new Error('Failed to update survey');
    }

    return await response.json();
  } catch (error) {
    console.error(`Error updating survey ${id}:`, error);
    throw error;
  }
};

// Delete a survey
export const deleteSurvey = async (id) => {
  try {
    const response = await fetch(`${API_URL}/surveys/${id}`, {
      method: 'DELETE'
    });

    if (!response.ok) {
      throw new Error('Failed to delete survey');
    }

    return await response.json();
  } catch (error) {
    console.error(`Error deleting survey ${id}:`, error);
    throw error;
  }
};
