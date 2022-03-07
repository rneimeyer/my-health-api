const mongoose = require("./../db/connection");

const Schema = mongoose.Schema;

const activitySchema = new Schema({
    "Date": Date,
    "Type": String,
    "Length": Number,
});

module.exports = mongoose.model("Activity", activitySchema)
