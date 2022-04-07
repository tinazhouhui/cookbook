import React, {useEffect, useState} from 'react';
import RecipeDashboard from "./components/dashboard/RecipeDashboard";
import AddRecipeForm from "./components/addRecipeForm/addRecipeForm";
import {getAllRecipes} from "../services/api";
import styles from './Cookbook.module.css';
import Spinner from "../components/spinner/Spinner";

function Cookbook() {
  const [isLoading, setLoading] = useState(true);
  const [showRecipeForm, setShowRecipe] = useState(false);

  const [allRecipes, setAllRecipes] = useState([]);

  useEffect(() => {
    getAllRecipes()
      .then(res => setAllRecipes(res))
      .then(() => setLoading(false));
  }, [])


  return (
    <div className={styles.container}>
      <h1>My Cookbook</h1>
      {isLoading ? (
        <div>
          <Spinner/>
        </div>
      ) : (<RecipeDashboard allRecipes={allRecipes} setRecipes={setAllRecipes}/>)}
      <button className={`${styles.addRecipeButton} ${styles.pulse}`} onClick={() => setShowRecipe(!showRecipeForm)}>Add new recipe!</button>
      {showRecipeForm && <AddRecipeForm setRecipes={setAllRecipes} setShowRecipe={setShowRecipe}/>}
    </div>
  );
}

export default Cookbook;