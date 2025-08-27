const Response = require("../models/Response");

// Save a new response
exports.addResponse = async (req, res) => {
  try {
    const newResponse = new Response(req.body);
    await newResponse.save();
    res.status(201).json(newResponse);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all responses for a survey
exports.getResponses = async (req, res) => {
  try {
    const responses = await Response.find({ surveyId: req.params.surveyId });
    res.json(responses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get summary/aggregated data for a survey
exports.getSummary = async (req, res) => {
  try {
    const surveyId = req.params.surveyId;

    const responses = await Response.find({ surveyId });
    const totalResponses = responses.length;

    // Example chart data
    const chartData = {};
    responses.forEach(r => {
      r.answers.forEach(a => {
        chartData[a.answer] = (chartData[a.answer] || 0) + 1;
      });
    });

    const formattedChartData = Object.entries(chartData).map(([key, value]) => ({
      name: key,
      value
    }));

    res.json({
      surveyTitle: "Sample Survey", // replace with survey title from Survey model if available
      totalResponses,
      chartData: formattedChartData
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
