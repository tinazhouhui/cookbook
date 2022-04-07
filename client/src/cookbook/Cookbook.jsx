import React, {useEffect, useState} from 'react';
import RecipeDashboard from "../components/dashboard/RecipeDashboard";
import AddRecipeForm from "../components/addRecipeForm/addRecipeForm";
import {getAllRecipes} from "../services/api";
import './Cookbook.css';

function Cookbook() {
  const [showRecipeForm, setShowRecipe] = useState(false);

  const [allRecipes, setAllRecipes] = useState([]);

  useEffect(() => {
    getAllRecipes()
      .then(res => setAllRecipes(res));
  }, [])


  return (
    <div className="container">
      <h1>My Cookbook</h1>
      <RecipeDashboard allRecipes={allRecipes} setRecipes={setAllRecipes}/>
      <button onClick={() => setShowRecipe(!showRecipeForm)}>Add new recipe!</button>
      {showRecipeForm && <AddRecipeForm setRecipes={setAllRecipes} setShowRecipe={setShowRecipe}/>}
    </div>
  );
}

export default Cookbook;