import React from 'react';
import styles from './Recipe.module.css';


function Recipe(props) {
  const {recipe} = props

  const {title, description, categories, ingredients} = recipe

  const categoriesHtml = categories.map(category => {
    return <span className={styles.category}>{category}</span>
  })

  return (
    <div className={styles.recipeContainer}>
      <h2>{title}</h2>
      {categoriesHtml}
      <p>{description}</p>
    </div>
  );
}

export default Recipe;