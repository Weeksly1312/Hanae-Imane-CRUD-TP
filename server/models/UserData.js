// Import mongoose
const mongoose = require('mongoose');

// Define the schema
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  city: {
    type: String,
    required: true
  }
});

// Create the model
const Person = mongoose.model('Person', personSchema, 'persons');

// Export the model
module.exports = Person;
