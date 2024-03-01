const notFound = (req, res, next) => {
  // Create a new Error with a message telling the user that the requested URL cannot be found.
  const error = new Error(`Not Found: ${req.originalUrl}`);
  //404 is the HTTP status code of the response: (Not Found)
  res.status(404);
  // Then i Pass the error object to my next middleware function.
  next(error);
};

const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;

  if (err.name === "CastError" && err.kind === "objectId") {
    statusCode = 404;
    message = "Sorry, resource not found";
  }
  // Sending my user the response with the determined status code and a JSON object containing the message and the stack trace (if not in production).
  res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

// Exporting the middleware functions at the bottom of the file
module.exports = {
  notFound,
  errorHandler,
};
