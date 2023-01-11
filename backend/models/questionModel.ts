const { Schema, model } = require("mongoose");

const questionSchema = new Schema({
  question: String,
  choices: [{
    choice: String,
    text: String,
    correctness: Boolean,
  }],
  explanation: String,
  correct_answer: String,
  type: String,
  timelimit: Number,
});

const Question = model("Question", questionSchema);

export { Question };
