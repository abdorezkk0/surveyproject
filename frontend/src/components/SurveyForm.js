import React, { useState } from 'react';
import './SurveyForm.css';

const SurveyForm = ({ onSubmit, initialData = null }) => {
  const [formData, setFormData] = useState(
    initialData || {
      title: '',
      description: '',
      questions: [
        {
          questionText: '',
          options: [''],
          isMandatory: false
        }
      ]
    }
  );
  
  const [errors, setErrors] = useState({});

  // Handle input changes for title and description
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle question text change
  const handleQuestionChange = (e, index) => {
    const updatedQuestions = [...formData.questions];
    updatedQuestions[index].questionText = e.target.value;
    setFormData({
      ...formData,
      questions: updatedQuestions
    });
  };

  // Handle option text change
  const handleOptionChange = (e, qIndex, oIndex) => {
    const updatedQuestions = [...formData.questions];
    updatedQuestions[qIndex].options[oIndex] = e.target.value;
    setFormData({
      ...formData,
      questions: updatedQuestions
    });
  };

  // Add a new option
  const addOption = (questionIndex) => {
    const updatedQuestions = [...formData.questions];
    updatedQuestions[questionIndex].options.push('');
    setFormData({
      ...formData,
      questions: updatedQuestions
    });
  };

  // Remove an option
  const removeOption = (questionIndex, optionIndex) => {
    const updatedQuestions = [...formData.questions];
    updatedQuestions[questionIndex].options.splice(optionIndex, 1);
    setFormData({
      ...formData,
      questions: updatedQuestions
    });
  };

  // Add a new question
  const addQuestion = () => {
    setFormData({
      ...formData,
      questions: [
        ...formData.questions,
        {
          questionText: '',
          options: [''],
          isMandatory: false
        }
      ]
    });
  };

  // Remove a question
  const removeQuestion = (index) => {
    if (formData.questions.length === 1) {
      alert('Survey must have at least one question');
      return;
    }
    
    const updatedQuestions = [...formData.questions];
    updatedQuestions.splice(index, 1);
    setFormData({
      ...formData,
      questions: updatedQuestions
    });
  };

  // Toggle mandatory status
  const toggleMandatory = (index) => {
    const updatedQuestions = [...formData.questions];
    updatedQuestions[index].isMandatory = !updatedQuestions[index].isMandatory;
    setFormData({
      ...formData,
      questions: updatedQuestions
    });
  };

  // Validate form before submission
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.title.trim()) {
      newErrors.title = 'Survey title is required';
    }
    
    let hasQuestionErrors = false;
    formData.questions.forEach((question, index) => {
      if (!question.questionText.trim()) {
        hasQuestionErrors = true;
      }
      
      question.options.forEach((option, optionIndex) => {
        if (!option.trim()) {
          hasQuestionErrors = true;
        }
      });
    });
    
    if (hasQuestionErrors) {
      newErrors.questions = 'All questions and options must be filled out';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit the form
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <div className="survey-form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Survey Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className={errors.title ? 'error-input' : ''}
            required
          />
          {errors.title && <div className="error-message">{errors.title}</div>}
        </div>
        
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>
        
        <h3>Questions</h3>
        {errors.questions && <div className="error-message">{errors.questions}</div>}
        
        {formData.questions.map((question, qIndex) => (
          <div key={qIndex} className="question-block">
            <div className="question-header">
              <h4>Question {qIndex + 1}</h4>
              <button 
                type="button" 
                onClick={() => removeQuestion(qIndex)}
                className="remove-button"
              >
                Remove Question
              </button>
            </div>
            
            <div className="form-group">
              <label htmlFor={`question-${qIndex}`}>Question Text:</label>
              <input
                type="text"
                id={`question-${qIndex}`}
                value={question.questionText}
                onChange={(e) => handleQuestionChange(e, qIndex)}
                required
              />
            </div>
            
            <div className="form-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={question.isMandatory}
                  onChange={() => toggleMandatory(qIndex)}
                />
                Mandatory Question
              </label>
            </div>
            
            <div className="options-section">
              <label>Options:</label>
              {question.options.map((option, oIndex) => (
                <div key={oIndex} className="option-row">
                  <input
                    type="text"
                    value={option}
                    onChange={(e) => handleOptionChange(e, qIndex, oIndex)}
                    placeholder={`Option ${oIndex + 1}`}
                    required
                  />
                  {question.options.length > 1 && (
                    <button 
                      type="button" 
                      onClick={() => removeOption(qIndex, oIndex)}
                      className="remove-option"
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}
              <button 
                type="button" 
                onClick={() => addOption(qIndex)}
                className="add-button small"
              >
                Add Option
              </button>
            </div>
          </div>
        ))}
        
        <button 
          type="button" 
          onClick={addQuestion}
          className="add-button"
        >
          Add Question
        </button>
        
        <div className="form-actions">
          <button 
            type="submit" 
            className="submit-button"
          >
            Save Survey
          </button>
        </div>
      </form>
    </div>
  );
};

export default SurveyForm;