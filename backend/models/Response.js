const mongoose = require("mongoose");

const responseSchema = new mongoose.Schema({
  surveyId: { type: mongoose.Schema.Types.ObjectId, ref: "Survey", required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  answers: [
    {
      questionId: { type: String, required: true },
      answer: { type: String, required: true }
    }
  ],
  submittedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Response", responseSchema);
