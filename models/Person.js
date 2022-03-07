// person model
const mongoose = require('./../db/connection')

const Schema = mongoose.Schema;

const personSchema = new Schema({
    "firstName": String,
   "lastName" : String,
   "email" : String,
   "age": Number,
   "weight": Number,
   "height": Number,
   "mood": String,
   activity : [{ type: Schema.Types.ObjectId, ref: "Activity"}]
})

module.exports = mongoose.model('Person', personSchema)