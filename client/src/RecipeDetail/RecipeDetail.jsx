import React, {useEffect, useState} from 'react';
import {useNavigate, useParams } from "react-router-dom";
import {getRecipe} from "../services/api";
import AddRecipeForm from "../cookbook/components/addRecipeForm/addRecipeForm";

function RecipeDetail() {
  const [defaultState, setDefault] = useState({});

  let navigate = useNavigate();
  const {id} = useParams();

  useEffect(() => {
    getRecipe(id)
      .then(res => {
        setDefault(cleanDefaults(res))
      });

  }, [id])

  function goBack(e) {
    e.preventDefault();
    navigate("/");
  }

  function cleanDefaults(defaultState) {
    const {title} = defaultState
    console.log({title})

    return defaultState
  }


  return (
    <>
      <button onClick={goBack}>go Back</button>
      <AddRecipeForm defaultValues={defaultState}/>
    </>
  );
}

export default RecipeDetail;