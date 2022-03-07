const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/my-health-api")

module.exports = mongoose