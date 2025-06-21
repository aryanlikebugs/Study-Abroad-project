const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const University = require('../models/university');

const router = express.Router();

// User Registration
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user with default wishlist
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      wishlist: {
        country: "N/A",
        fieldOfStudy: "N/A",
        programType: "N/A",
      },
    });

    await newUser.save();

    // Generate JWT token
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    // Return token and user data
    res.status(201).json({
      token,
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        wishlist: newUser.wishlist,
      },
    });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

// User Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    // Generate JWT
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// Verify Token Middleware
const verifyToken = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Access Denied' });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid Token' });
  }
};

// Get User Data
router.get('/get_user', verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// API endpoint to add universities
router.post('/add-universities', async (req, res) => {
  try {
    const universities = req.body; // Expecting an array of universities from Postman

    if (!Array.isArray(universities) || universities.length === 0) {
      return res.status(400).json({ message: "Invalid data format. Expecting an array of universities." });
    }

    // Insert data into the database
    await University.insertMany(universities);

    res.status(201).json({ message: "Universities added successfully!" });
  } catch (error) {
    console.error("Error adding universities:", error);
    res.status(500).json({ message: "Server error. Unable to add universities.", error });
  }
});

// Update User Profile (Authenticated Route)
router.put('/update-profile', verifyToken, async (req, res) => {
  try {
    const { name, website, wishlist } = req.body;

    // Validate wishlist fields
    const { country, fieldOfStudy, programType } = wishlist || {};

    // Find user by ID and update
    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      {
        name,
        website,
        wishlist: {
          country: country || "N/A",
          fieldOfStudy: fieldOfStudy || "N/A",
          programType: programType || "N/A",
        },
      },
      { new: true, runValidators: true }
    ).select("-password");

    res.status(200).json({ message: 'Profile updated successfully', user: updatedUser });
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});


// // api endpoint to Get universities with pagination
// router.get('/universities', async (req, res) => {
//   try {
//     let { page = 1, limit = 6 } = req.query; // Default: page 1, 6 programs per load
//     page = parseInt(page);
//     limit = parseInt(limit);

//     const universities = await University.find()
//       .skip((page - 1) * limit)
//       .limit(limit);

//     const totalUniversities = await University.countDocuments();

//     res.status(200).json({
//       universities,
//       total: totalUniversities,
//       hasMore: page * limit < totalUniversities,
//     });
//   } catch (error) {
//     console.error("Error fetching universities:", error);
//     res.status(500).json({ message: "Server error", error });
//   }
// });


// api endpoint to Get universities without pagination
router.get('/universities', async (req, res) => {
  try {
    const universities = await University.find(); // Fetch all universities

    res.status(200).json({ universities });
  } catch (error) {
    console.error("Error fetching universities:", error);
    res.status(500).json({ message: "Server error", error });
  }
});


module.exports = router;
