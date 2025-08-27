const express = require("express");
const router = express.Router();
const responseController = require("../controllers/responseController");
const auth = require("../middleware/auth");

// Save a response
router.post("/", auth, responseController.addResponse);

// Get all responses for a survey
router.get("/:surveyId", auth, responseController.getResponses);

// Get aggregated summary
router.get("/:surveyId/summary", auth, responseController.getSummary);

module.exports = router;
