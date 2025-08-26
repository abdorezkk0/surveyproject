// Main dashboard/home page
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SurveyCard from '../components/SurveyCard';
import { getSurveys, deleteSurvey } from '../services/api';

const Dashboard = () => {
  const [surveys, setSurveys] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch surveys when component mounts
  useEffect(() => {
    fetchSurveys();
  }, []);

  // Get all surveys from the API
  const fetchSurveys = async () => {
    setLoading(true);
    try {
      const response = await getSurveys();
      setSurveys(response.data || []);
      setError(null);
    } catch (error) {
      console.error('Error fetching surveys:', error);
      setError('Failed to load surveys. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // Handle survey deletion
  const handleDeleteSurvey = async (id) => {
    try {
      await deleteSurvey(id);
      // Remove the deleted survey from state
      setSurveys(surveys.filter(survey => survey._id !== id));
      alert('Survey deleted successfully');
    } catch (error) {
      console.error('Error deleting survey:', error);
      alert('Failed to delete survey');
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Your Surveys</h1>
        <Link to="/surveys/create" className="create-survey-btn">
          Create New Survey
        </Link>
      </div>

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      {loading ? (
        <div className="loading-indicator">Loading surveys...</div>
      ) : surveys.length === 0 ? (
        <div className="no-surveys">
          <p>You haven't created any surveys yet.</p>
          <p>Click "Create New Survey" to get started.</p>
        </div>
      ) : (
        <div className="survey-list">
          {surveys.map(survey => (
            <SurveyCard 
              key={survey._id} 
              survey={survey} 
              onDelete={handleDeleteSurvey} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
