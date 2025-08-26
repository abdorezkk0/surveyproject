// Component to display survey item information
import React from 'react';
import { Link } from 'react-router-dom';

const SurveyCard = ({ survey, onDelete }) => {
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this survey?')) {
      onDelete(survey._id);
    }
  };

  return (
    <div className="survey-card">
      <div className="survey-card-header">
        <h3>{survey.title}</h3>
        <span className="question-count">
          {survey.questions.length} question{survey.questions.length !== 1 ? 's' : ''}
        </span>
      </div>
      
      <div className="survey-card-body">
        <p>{survey.description || 'No description provided.'}</p>
        <p className="survey-date">
          Created: {new Date(survey.dateCreated).toLocaleDateString()}
        </p>
      </div>
      
      <div className="survey-card-actions">
        <Link to={`/surveys/${survey._id}`} className="view-btn">
          View
        </Link>
        <Link to={`/surveys/edit/${survey._id}`} className="edit-btn">
          Edit
        </Link>
        <button 
          className="delete-btn"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default SurveyCard;
