// Module 1 - Survey creation page
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SurveyForm from '../components/SurveyForm';
import { createSurvey } from '../services/api';
import './CreateSurvey.css';

const CreateSurvey = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (surveyData) => {
    setIsSubmitting(true);
    setError(null);
    
    try {
      await createSurvey(surveyData);
      alert('Survey created successfully!');
      navigate('/'); // Navigate to home or survey list page
    } catch (error) {
      setError('Failed to create survey. Please try again.');
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="create-survey-container">
      <h1>Create New Survey</h1>
      
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      
      <SurveyForm onSubmit={handleSubmit} />
      
      {isSubmitting && (
        <div className="loading-indicator">
          Creating survey...
        </div>
      )}
    </div>
  );
};

export default CreateSurvey;