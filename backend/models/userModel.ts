const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  type: String,
  name: String,
  email: String,
  age: Number,
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  birthDate: Date,
  country: String,
  avater: String,
  introduction: String,
  likedQuiz: [{
    type: Schema.Types.ObjectId,
    ref: "Quiz",
  }],
  createdQuiz: [{
    type: Schema.Types.ObjectId,
    ref: "Quiz",
  }],
  playedQuiz: [{
    type: Schema.Types.ObjectId,
    ref: "Quiz",
  }],
  result: [{
    type: Schema.Types.ObjectId,
    ref: "Result",
  }],
});

const User = model("User", userSchema);

export { User };
