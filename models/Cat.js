const mongoose = require('mongoose')

// Cat Schema
const catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  breed: String,
  isAdopted: Boolean
})

// Cat Model
const Cat = mongoose.model('Cat',catSchema)

// Export
module.exports = Cat
