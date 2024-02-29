const express = require("express");
const router = express.Router();
const createUser = require("../controllers/userController");

// Route: POST ('/api/users')
// Access: Public
// @Desc: Creates a new USER
router.post("/", createUser);

// Route: POST ('/api/users')
// Access: Public
// @Desc: Authenticates a user
router.post("/auth");

// Route: POST ('/api/users')
// Access: Private
// @Desc: Authenticates a user
router.post("/logout");

module.exports = router;
