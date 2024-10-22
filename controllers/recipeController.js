// Import the Recipe model to interact with the database
const Recipe = require("../models/Recipe");

// Controller for creating a new recipe
exports.createRecipe = async (req, res) => {
  try {
    // Create a new recipe with the data from the request body
    const newRecipe = new Recipe(req.body);

    // Save the new recipe to the database
    const savedRecipe = await newRecipe.save();

    // Return the saved recipe in the response
    res.status(201).json({message: "Recipe created successfully", data: savedRecipe});

  } catch (error) {
    // If there's an error, return a 400 status with the error message
    res.status(400).json({ error: error.message });
  }
};

// Get all recipes
exports.getAllRecipes = async (req, res) => {
  try {
    // Find all recipes in the database
    const recipes = await Recipe.find();

    // Return all recipes in the response
    res.status(200).json(recipes);
  } catch (error) {
    // If there's an error, return a 500 status with the error message
    res.status(500).json({ error: error.message });
  }
};

// Get recipe by ID
exports.getRecipeById =  async (req, res) => {
  const { id } = req.params; // Get the id from the route parameters
  try {
    // Find a recipe by the ID provided in the request parameters
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      // Return 404 if recipe is not found
      return res.status(404).json({ message: "Recipe not found" });
    }
    // Return the found recipe
    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a recipe by ID
exports.updateRecipe = async (req, res) => {
  try {
    // Update the recipe with the ID from the request parameters using the data from the request body
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedRecipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }
    // Return the updated recipe
    res.status(200).json(updatedRecipe);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a recipe by ID
exports.deleteRecipe = async (req, res) => {
  try {
    // Delete the recipe with the ID provided in the request parameters
    const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
    if (!deletedRecipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }
    res.status(200).json({ message: "Recipe deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
