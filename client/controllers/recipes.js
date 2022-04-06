const Recipes = require('../models/recipes');

async function saveNewRecipe (req, res) {
  try {
    const output = await Recipes.newRecipe(req.body)
        res.send(output);
  } catch (err) {
    res.status(404);
    res.send({error: err.stack})
  }
}

module.exports = {saveNewRecipe}

async function deleteRecipe (req, res) {
  const _id = req.params

  try {
    const output = await Recipes.RecipesModel.findOneAndDelete(_id)
    res.send(output);
  } catch (err) {
    res.status(404);
    res.send({error: err.stack});
  }
}

module.exports = {saveNewRecipe, deleteRecipe}