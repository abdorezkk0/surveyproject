const mongoose = require('mongoose');

// Schema for multiple-choice questions
const QuestionSchema = new mongoose.Schema({
  questionText: {
    type: String,
    required: [true, 'Question text is required']
  },
  // Since we only have multiple-choice questions, we don't need questionType
  options: {
    type: [String],
    required: [true, 'Multiple choice options are required'],
    validate: {
      validator: function(v) {
        return v.length > 0;
      },
      message: 'At least one option must be provided'
    }
  },
  isMandatory: {
    type: Boolean,
    default: false
  },
  order: {
    type: Number,
    default: 0
  }
});

// Main Survey schema
const SurveySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Survey title is required'],
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  dateCreated: {
    type: Date,
    default: Date.now
  },
  questions: [QuestionSchema],
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Survey', SurveySchema);