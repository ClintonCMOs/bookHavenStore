const express = require("express");
const { User } = require("../models/userModel.js");
const router = express.Router();
const bcrypt = require("bcrypt");

// Route for registering a new user
router.post("/register", async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // Check if all required fields are provided
    if (!firstName || !lastName || !email || !password) {
      return res
        .status(400)
        .send({ message: "Please provide all required details" });
    }

    // Hash the password
    const hashedpassword = await bcrypt.hash(password, 12);

    // Create a new user using the User model and request body
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedpassword, // Store hashed password in the database
    });

    // Return the newly created user object as response
    return res.status(201).send(newUser);
  } catch (error) {
    console.error("Error registering user:", error.message);
    // Handle errors - sending an appropriate error response
    return res
      .status(500)
      .send({ message: "Failed to register user", error: error.message });
  }
});

// Route for logging in a registered user
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    // Find user by email
    const user = await User.findOne({ email: email });

    if (user) {
      // Compare hashed password with entered password
      const isMatch = await bcrypt.compare(password, user.password);

      if (isMatch) {
        // Passwords match, login successful
        return res.json("Success");
      } else {
        // Passwords do not match
        return res.json("The password is incorrect");
      }
    } else {
      // User not found
      return res.json("No record existed");
    }
  } catch (error) {
    console.error("Error logging in user:", error.message);
    // Handle errors - sending an appropriate error response
    return res
      .status(500)
      .send({ message: "Failed to login user", error: error.message });
  }
});

module.exports = router;
