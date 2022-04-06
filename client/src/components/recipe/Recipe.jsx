import React from 'react';
import './Recipe.css';


function Recipe(props) {
  const {recipe} = props

  const {title, description, categories, ingredients} = recipe

  const categoriesHtml = categories.map(category => {
    return <span className="category">{category}</span>
  })

  const descriptionHtml = description.map((step, index) => {
    return <li key={index}>{step}</li>
  })

  return (
    <div className="recipeContainer">
      <h2>{title}</h2>
      {categoriesHtml}
      <div className="stepList">
        <ol>
          {descriptionHtml}
        </ol>
      </div>
    </div>
  );
}

export default Recipe;