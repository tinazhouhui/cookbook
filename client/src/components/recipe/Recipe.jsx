import React from 'react';
import styles from './Recipe.module.css';


function Recipe(props) {
  const {recipe} = props

  const {title, description, categories, ingredients} = recipe

  const categoriesHtml = categories.map(category => {
    return <span className={styles.category}>{category}</span>
  })

  const descriptionHtml = description.map((step, index) => {
    return <li key={index}>{step}</li>
  })

  return (
    <div className={styles.recipeContainer}>
      <h2>{title}</h2>
      {categoriesHtml}
      <div className={styles.stepList}>
        <ol>
          {descriptionHtml}
        </ol>
      </div>
    </div>
  );
}

export default Recipe;