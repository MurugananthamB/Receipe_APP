// Import mongoose to interact with MongoDB
const mongoose = require("mongoose");

// Function to connect to MongoDB using the URI from the .env file
const connectDB = async () => {
  try {
    // Mongoose connects to the MongoDB URI stored in environment variables
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    // Log the error if the connection fails and exit the application
    console.error("Database connection error:", error);
    process.exit(1); // Exit process if there's an error
  }
};

module.exports = connectDB;
