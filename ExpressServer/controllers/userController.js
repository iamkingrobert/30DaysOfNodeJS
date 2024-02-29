const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

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

module.exports = createUser;
