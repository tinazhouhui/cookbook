import React, {useEffect, useState} from 'react';
import {getAllRecipes} from "../../services/api";
import Recipe from "../recipe/Recipe";
// import './Dashboard.module.css';
import styles from './Dashboard.module.css'

function RecipeDashboard() {

  const [allRecipes, setAllRecipes] = useState([]);

  useEffect(() => {
    getAllRecipes()
      .then(res => setAllRecipes(res));
  }, [])

  return (
    <div className={styles.dashboard}>
      {allRecipes.map(recipe => <Recipe key={recipe._id} recipe={recipe}/>)}
    </div>
  );
}

export default RecipeDashboard;