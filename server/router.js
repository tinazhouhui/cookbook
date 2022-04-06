'use strict';

const {Router} = require('express');
const recipesController = require('./controllers/recipes')

const router = Router();

router.get('/recipes', recipesController.getAllRecipes);
router.post('/recipes', recipesController.saveNewRecipe);
router.delete('/recipes/:_id', recipesController.deleteRecipe);
router.put('/recipes/:_id', recipesController.updateRecipe);

module.exports = router;