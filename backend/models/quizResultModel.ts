const { Schema, model } = require("mongoose");

const quizResultSchema = new Schema({
  quizTitle: String,
  username: String,
  score: Number,
  date: Date,
  correctQuestions: [
    {
      type: Schema.Types.ObjectId,
      ref: "Question",
    },
  ],
  wrongQuestions: [
    {
      type: Schema.Types.ObjectId,
      ref: "Question",
    },
  ],
});
