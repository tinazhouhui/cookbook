import React, {useEffect, useState} from 'react';
import {getAllRecipes} from "../services/api";
import Recipe from "./Recipe";

function RecipeDashboard() {

  const [allRecipes, setAllRecipes] = useState([]);

  useEffect(() => {
    getAllRecipes()
      .then(res => setAllRecipes(res));
  }, [])

  return (
    <>
      <div>Recipe Dashboard</div>
      {allRecipes.map(recipe => <Recipe key={recipe._id} recipe={recipe}/>)}
    </>
  );
}

export default RecipeDashboard;