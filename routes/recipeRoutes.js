// Import express to create the router and the controller to handle the routes
const express = require("express");
const router = express.Router();
const recipeController = require("../controllers/recipeController");

// Define route for creating a new recipe (POST /recipes)
router.post("/createRecipes", recipeController.createRecipe);

// Define route for getting all recipes (GET /recipes)
router.get("/getAllRecipes", recipeController.getAllRecipes);

// Define route for getting a single recipe by ID (GET /recipes/:id)
router.get("/getRecipeById/:id", recipeController.getRecipeById);

// Define route for updating a recipe by ID (PUT /recipes/:id)
router.put("/updateRecipes/:id", recipeController.updateRecipe);

// Define route for deleting a recipe by ID (DELETE /recipes/:id)
router.delete("/deleteRecipes/:id", recipeController.deleteRecipe);

// Export the router to be used in app.js
module.exports = router;
