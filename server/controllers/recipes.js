const Recipes = require('../models/recipes');

async function getAllRecipes(req, res) {
  try {
    const output = await Recipes.RecipesModel.find();
    res.send(output);
  } catch (err) {
    res.status(404);
    res.send({error: err.stack});
  }
}

async function getRecipe(req, res) {
  const _id = req.params;
  try {
    const output = await Recipes.RecipesModel.findOne(_id);
    res.send(output);
  } catch (err) {
    res.status(404);
    res.send({error: err.stack});
  }
}

async function saveNewRecipe(req, res) {
  try {
    const output = await Recipes.newRecipe(req.body);

    res.send(output);
  } catch (err) {
    res.status(404);
    res.send({error: err.stack})
  }
}

async function deleteRecipe(req, res) {
  const _id = req.params

  try {
    const output = await Recipes.RecipesModel.findOneAndDelete(_id);
    res.send(output);
  } catch (err) {
    res.status(404);
    res.send({error: err.stack});
  }
}

async function updateRecipe(req, res) {
  try {
    const _id = req.params;
    const output = await Recipes.RecipesModel.findOneAndUpdate(_id, req.body);
    res.send(output);
  } catch (err) {
    res.status(404);
    res.send({error: err.stack});
  }
}

module.exports = {getAllRecipes, saveNewRecipe, deleteRecipe, updateRecipe, getRecipe}