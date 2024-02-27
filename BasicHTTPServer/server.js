// Day 01 of 30DaysOfNodeJS

const http = require("http");

// MY SERVER PORT
const PORT = 3000;

// CREATED MY SERVER USING THE HTTP createServer Method
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Welcome To King Robert 30 Days Of NODEJS</h1>");
});

// START THE SERVER & LISTEN ON PORT 3000
server.listen(PORT, () => {
  console.log(`Server running... http://localhost:${PORT}/`);
});
