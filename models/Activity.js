//activity model
const mongoose = require("./../db/connection");

const Schema = mongoose.Schema;

const activitySchema = new Schema({
  date: Date,
  exercise: String,
  length: Number,
  intensity: Number,
});

module.exports = mongoose.model("Activity", activitySchema);
