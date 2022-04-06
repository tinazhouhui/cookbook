const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
  title: String,
  categories: [String],
  description: [String],
  ingredients: [String],
  dateCreated: String,
})
const RecipesModel = mongoose.model('Recipes', recipeSchema)

async function newRecipe (recipe) {
  recipe.dateCreated = Date();

  try {
    return await RecipesModel.create(recipe);
  } catch (err) {
    console.error(err.stack);
  }
}

module.exports = {RecipesModel, newRecipe};