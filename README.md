# Recipes App

A full-featured CRUD (Create, Read, Update, Delete) application for managing recipes, built using Node.js, Express.js, and MongoDB with Mongoose. This application follows the MVC (Model-View-Controller) architecture, providing a RESTful API for interacting with recipe data. The project also utilizes Postman for API testing and documentation.

## Features

- **Create Recipes:** Add new recipes to the database with ease.
- **Retrieve Recipes:** Fetch all available recipes or retrieve a single recipe by its unique ID.
- **Update Recipes:** Modify existing recipes and keep them up to date.
- **Delete Recipes:** Remove unwanted recipes from the database.
- **Full CRUD Functionality:** The app supports all CRUD operations for comprehensive recipe management.
- **MVC Pattern:** Ensures clean code organization, with separation of concerns between models, views, and controllers.
- **Error Handling & Validation:** Robust error handling and input validation for smooth API operations.

## Tech Stack

- **Node.js:** JavaScript runtime for server-side execution.
- **Express.js:** Minimalist web framework for building APIs and handling HTTP requests.
- **MongoDB:** NoSQL database used for storing and managing recipe data.
- **Mongoose:** ODM (Object Data Modeling) library that provides a straightforward way to interact with MongoDB.
- **Postman:** Tool for API testing and documentation, used to ensure all API endpoints function as expected.

## API Endpoints

- **Create Recipe**  
  `POST /api/recipes`
  
- **Retrieve All Recipes**  
  `GET /api/recipes`
  
- **Retrieve a Single Recipe**  
  `GET /api/recipes/:id`
  
- **Update Recipe**  
  `PUT /api/recipes/:id`
  
- **Delete Recipe**  
  `DELETE /api/recipes/:id`

## Project Structure

```bash
.
├── controllers     # Handles business logic
├── models          # Mongoose models for database interaction
├── routes          # API routes definitions
├── views           # Views for frontend (if applicable)
├── app.js          # Main application setup
└── package.json    # Project dependencies and scripts

## Contributing
Contributions are welcome! Feel free to submit a pull request or open an issue if you find bugs or have feature requests.

## License
This project is licensed under the MIT License. See the LICENSE file for details.