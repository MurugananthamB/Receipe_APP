// Import mongoose to define the schema for the Recipe model
const mongoose = require("mongoose");

// Define the schema (structure) for a Recipe document in MongoDB
const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  ingredients: { type: [String], required: true },
  instructions: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Create and export the Recipe model based on the schema
module.exports = mongoose.model("Recipe", recipeSchema);
