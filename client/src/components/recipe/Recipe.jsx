import React from 'react';
import './Recipe.css';
import {deleteRecipe} from "../../services/api";


function Recipe(props) {
  const {recipe, setRecipes} = props

  const {title, description, categories, ingredients, _id} = recipe

  const categoriesHtml = categories.map((category, index) => {
    return <span key={index} className='category'>{category}</span>
  })

  const descriptionHtml = description.map((step, index) => {
    return <li key={index}>{step}</li>
  })

  const ingredientsHtml = ingredients.map((ingredient, index) => {
    return <li key={index}>{ingredient}</li>
  })

  function handleDelete () {
    deleteRecipe(_id)
      .then(res => updateRecipes(res))
      .catch(res => console.error(res))
  }

  function updateRecipes(delRecipe) {
    setRecipes(prev => {
      return prev.filter(recipe => recipe._id !== delRecipe._id);
    })
  }

  return (
    <div className='recipeContainer'>
      <div className='recipeHeader'>
        <h2>{title}</h2>
        <button onClick={handleDelete}>X</button>
      </div>
      {categoriesHtml}
      <div className='ingredients'>
        <h4>Ingredients</h4>
        <ul>
          {ingredientsHtml}
        </ul>
      </div>
      <div className='stepList'>
        <h4>Description</h4>
        <ol>
          {descriptionHtml}
        </ol>
      </div>
    </div>
  );
}

export default Recipe;