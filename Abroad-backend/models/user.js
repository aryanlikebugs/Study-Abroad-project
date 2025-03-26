// const mongoose = require('mongoose');

// const UserSchema = new mongoose.Schema({
//   name: { type: String, required: false },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true }
// }, { timestamps: true });

// module.exports = mongoose.model('User', UserSchema);

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, default:"User Name", required: false },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: "Student" }, // Default role
  website: { type: String, default: "www.example.com" },

  wishlist: {
    country: { type: String, default: "N/A" },
    fieldOfStudy: { type: String, default: "N/A" },
    programType: { type: String, default: "N/A" }
  }
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
