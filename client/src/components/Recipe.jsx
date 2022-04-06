import React, {useEffect} from 'react';
import {getAllRecipes} from "../services/api";

function Recipe(props) {
  const {recipe} = props


  return (
    <h2>{recipe.title}</h2>
  );
}

export default Recipe;