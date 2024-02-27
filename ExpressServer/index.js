const express = require("express");
const app = express();

PORT = 4000;

// METHOD: GET Endpoint: '/' - GET Method is used when Retrieving Data from the server
app.get("/", (req, res) => {
  res.send("Welcome to Express Server");
});

// METHOD: POST Endpoint: '/api/user' - POST Method is used when Sending Data to the server
app.post("/api/users", (req, res) => {});

app.listen(PORT, () => {
  console.log("Express Server Running On Port: " + PORT);
});

// INSTALL UUID FOR THE PROJECT & LOGGING IT IN CONSOLE TO PREVIEW IT
const { v4: uuidv4 } = require("uuid");
console.log(uuidv4());
