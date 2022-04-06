'use strict';

const {Router} = require('express');
const recipesController = require('./controllers/recipes')

const router = Router();

// router.get('/recipes', (req, res) => {
//   res.send({msg: 'Get'});
// });

router.get('/recipes', recipesController.getAllRecipes);
router.post('/recipes', recipesController.saveNewRecipe);
router.delete('/recipes/:_id', recipesController.deleteRecipe);

module.exports = router;