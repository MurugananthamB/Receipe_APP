// Middleware to handle errors in the application
const errorHandler = (err, req, res, next) => {
  // Send an error response with the error message and status code
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
  });
};

// Export the error handler to be used in app.js
module.exports = errorHandler;
