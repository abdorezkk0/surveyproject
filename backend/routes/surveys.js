const express = require('express');
const router = express.Router();
const {
  createSurvey,
  getSurveys,
  getSurvey,
  updateSurvey,
  deleteSurvey
} = require('../controllers/surveyController');

// You can add middleware for authentication here if needed
// const { protect } = require('../middleware/auth');

// Survey routes
router.route('/')
  .get(getSurveys)
  .post(createSurvey);

router.route('/:id')
  .get(getSurvey)
  .put(updateSurvey)
  .delete(deleteSurvey);

module.exports = router;