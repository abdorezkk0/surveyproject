const Survey = require('../models/Survey');

// Create a new survey
exports.createSurvey = async (req, res) => {
  try {
    const survey = await Survey.create({
      ...req.body,
      createdBy: req.user ? req.user.id : null // If authentication is implemented
    });
    
    res.status(201).json({
      success: true,
      data: survey
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

// Get all surveys
exports.getSurveys = async (req, res) => {
  try {
    // Can add filters based on query params
    const surveys = await Survey.find();
    
    res.status(200).json({
      success: true,
      count: surveys.length,
      data: surveys
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

// Get single survey by ID
exports.getSurvey = async (req, res) => {
  try {
    const survey = await Survey.findById(req.params.id);
    
    if (!survey) {
      return res.status(404).json({
        success: false,
        error: 'Survey not found'
      });
    }
    
    res.status(200).json({
      success: true,
      data: survey
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

// Update survey
exports.updateSurvey = async (req, res) => {
  try {
    const survey = await Survey.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { 
        new: true,
        runValidators: true 
      }
    );
    
    if (!survey) {
      return res.status(404).json({
        success: false,
        error: 'Survey not found'
      });
    }
    
    res.status(200).json({
      success: true,
      data: survey
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

// Delete survey
exports.deleteSurvey = async (req, res) => {
  try {
    const survey = await Survey.findByIdAndDelete(req.params.id);
    
    if (!survey) {
      return res.status(404).json({
        success: false,
        error: 'Survey not found'
      });
    }
    
    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};