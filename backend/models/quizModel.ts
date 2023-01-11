const { Schema, model } = require("mongoose");

const quizSchema = new Schema({
  thumbnail: String,
  title: String,
  description: String,
  Owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  theme: String,
  created_time: Date,
  total_like: Number,
  visibility: String,
  total_share: Number,
  questions: [{
    type: Schema.Types.ObjectId,
    ref: "Question",
  }],
});

const Quiz = model("Quiz", quizSchema);

export { Quiz };
