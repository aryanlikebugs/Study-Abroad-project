const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const universitySchema = new Schema({
  collegeName: { type: String, required: true },  // Matches scraped data key
  location: { type: String, required: true },  // Keeping location as a single string
  coursesOffered: [{ type: String, required: true }],  // Array of course names
  scholarshipsOffered: [{ type: String, required: true }],  // Array of scholarship names
  eligibilityCriteriaForInternationalStudents: { type: String, required: true }  // Single field for eligibility
});

module.exports = mongoose.model('University', universitySchema);
