const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const port = process.env.PORT || 4000;
const db = process.env.MONGO_URL;
const app = express();

// METHOD: GET Endpoint: '/' - GET Method is used when Retrieving Data from the server
app.get("/", (req, res) => {
  res.send("Welcome to Express Server");
});

// METHOD: POST Endpoint: '/api/user' - POST Method is used when Sending Data to the server
app.post("/api/users", (req, res) => {});

const start = async () => {
  try {
    await mongoose.connect(db);
    app.listen(port, () => {
      console.log("Express Server Running On Port: " + port);
    });
  } catch (error) {
    console.log(error.message);
  }
};

start();

// INSTALL UUID FOR THE PROJECT & LOGGING IT IN CONSOLE TO PREVIEW,
// WE WILL BE USING THIS PACKAGE LATER ON IN THE PROJECT
const { v4: uuidv4 } = require("uuid");
console.log(uuidv4());

// MORE DAY 02 UPDATES BELOW
// MONGODB IS CONNECTED WITH URL IN THE .ENV FILE
// I ALSO SETUP POSTMAN WORKSPACE FOR TESTING
