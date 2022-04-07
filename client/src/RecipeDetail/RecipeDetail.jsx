import React, {useEffect} from 'react';
import {useNavigate, useParams } from "react-router-dom";
import {getRecipe} from "../services/api";

function RecipeDetail() {
  let navigate = useNavigate();
  const {id} = useParams();

  useEffect(() => {
    getRecipe(id)
      .then(res => console.log(res));

  }, [id])

  function goBack(e) {
    e.preventDefault();
    navigate("/");
  }

  return (
    <>
      <button onClick={goBack}>go Back</button>
      <div>Hello</div>
    </>

  );
}

export default RecipeDetail;