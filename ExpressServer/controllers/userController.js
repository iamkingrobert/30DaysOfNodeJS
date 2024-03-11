const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../utils/generateToken");

// @Desc: Auth User/Set Token
// Routes: POST api/users/auth
// @Access Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  //Attempts to find a user in the database with the provided email address
  const user = await User.findOne({ email });
});

// Sending Logged user data
//Compare the hashed password stored in the database with the password provided in the request
if (user && (await user.matchPassword(password))) {
  //If email and password are correct, the code generates a token using
  generateToken(res, user._id);
  res.status(201).json({
    //sets the status to 201 (Created), and sends back the user's information as a JSON response
    _id: user._id,
    name: user.name,
    email: user.email,
  });
} else {
  res.status(401);
  throw new Error("Invalid email or password");
}

// @Desc: Register a new User
// Routes: POST api/users
// @Access Public
const createUser = asyncHandler(async (req, res) => {
  // Destructuring the user data from the request body
  const { name, email, password } = req.body;

  // Check if the user already exists
  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(400);
    throw new Error(`User ${email} already exists`);
  }

  // Create a new user
  const user = await User.create({
    name,
    email,
    password,
  });

  res.status(201).json({
    _id: user._id,
    name: user.name,
    email: user.email,
  });
});

module.exports = { createUser, authUser };
