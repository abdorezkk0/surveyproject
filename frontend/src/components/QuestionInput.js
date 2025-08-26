// Component for input questions with mandatory checkbox
import React, { useState } from 'react';

const QuestionInput = ({ question, onChange, onDelete, index }) => {
  const [localQuestion, setLocalQuestion] = useState(question);

  // Handle changes to the question text
  const handleQuestionTextChange = (e) => {
    const updatedQuestion = { ...localQuestion, questionText: e.target.value };
    setLocalQuestion(updatedQuestion);
    onChange(updatedQuestion, index);
  };

  // Handle changes to the mandatory status
  const handleMandatoryChange = (e) => {
    const updatedQuestion = { ...localQuestion, isMandatory: e.target.checked };
    setLocalQuestion(updatedQuestion);
    onChange(updatedQuestion, index);
  };

  // Add a new option
  const addOption = () => {
    const updatedOptions = [...localQuestion.options, ''];
    const updatedQuestion = { ...localQuestion, options: updatedOptions };
    setLocalQuestion(updatedQuestion);
    onChange(updatedQuestion, index);
  };

  // Remove an option
  const removeOption = (optionIndex) => {
    const updatedOptions = localQuestion.options.filter((_, i) => i !== optionIndex);
    const updatedQuestion = { ...localQuestion, options: updatedOptions };
    setLocalQuestion(updatedQuestion);
    onChange(updatedQuestion, index);
  };

  // Handle changes to an option
  const handleOptionChange = (e, optionIndex) => {
    const updatedOptions = [...localQuestion.options];
    updatedOptions[optionIndex] = e.target.value;
    const updatedQuestion = { ...localQuestion, options: updatedOptions };
    setLocalQuestion(updatedQuestion);
    onChange(updatedQuestion, index);
  };

  return (
    <div className="question-input-container">
      <div className="question-header">
        <h3>Question {index + 1}</h3>
        <button 
          type="button" 
          className="delete-question-btn"
          onClick={() => onDelete(index)}
        >
          Delete Question
        </button>
      </div>

      <div className="form-group">
        <label htmlFor={`question-${index}`}>Question Text:</label>
        <input
          type="text"
          id={`question-${index}`}
          className="form-control"
          value={localQuestion.questionText}
          onChange={handleQuestionTextChange}
          placeholder="Enter your question"
          required
        />
      </div>

      <div className="form-group">
        <label className="mandatory-checkbox">
          <input
            type="checkbox"
            checked={localQuestion.isMandatory}
            onChange={handleMandatoryChange}
          />
          Mandatory Question
        </label>
      </div>

      <div className="options-container">
        <label>Answer Options:</label>
        {localQuestion.options.map((option, optionIndex) => (
          <div key={optionIndex} className="option-input">
            <input
              type="text"
              className="form-control"
              value={option}
              onChange={(e) => handleOptionChange(e, optionIndex)}
              placeholder={`Option ${optionIndex + 1}`}
              required
            />
            {localQuestion.options.length > 1 && (
              <button 
                type="button" 
                className="remove-option-btn"
                onClick={() => removeOption(optionIndex)}
              >
                Remove
              </button>
            )}
          </div>
        ))}
        <button 
          type="button" 
          className="add-option-btn"
          onClick={addOption}
        >
          Add Option
        </button>
      </div>
    </div>
  );
};

export default QuestionInput;
