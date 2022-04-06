import React from 'react';
import Recipe from "../recipe/Recipe";

import styles from './Dashboard.module.css'

function RecipeDashboard(props) {
    return (
    <div className={styles.dashboard}>
      {props.allRecipes.map(recipe => <Recipe key={recipe._id} recipe={recipe}/>)}
    </div>
  );
}

export default RecipeDashboard;