const { Schema, model } = require("mongoose");

const followSchema = new Schema({
  username: String,
  follower: [{
    type: Schema.Types.ObjectId,
    ref: "User",
  }],
  following: [{
    type: Schema.Types.ObjectId,
    ref: "User",
  }],
});

const Follow = model("Follow", followSchema);

export { Follow };
