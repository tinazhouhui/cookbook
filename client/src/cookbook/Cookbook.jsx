import React, {useEffect, useState} from 'react';
import RecipeDashboard from "../components/dashboard/RecipeDashboard";
import AddRecipeForm from "../components/addRecipeForm/addRecipeForm";
import {getAllRecipes} from "../services/api";

function Cookbook() {
  const [showRecipeForm, setShowRecipe] = useState(false);

  const [allRecipes, setAllRecipes] = useState([]);

  useEffect(() => {
    getAllRecipes()
      .then(res => setAllRecipes(res));
  }, [])


  return (
    <div>
      <h1>My Cookbook</h1>
      <RecipeDashboard allRecipes={allRecipes}/>
      <button onClick={() => setShowRecipe(!showRecipeForm)}>Add new recipe!</button>
      {showRecipeForm && <AddRecipeForm/>}
    </div>
  );
}

export default Cookbook;