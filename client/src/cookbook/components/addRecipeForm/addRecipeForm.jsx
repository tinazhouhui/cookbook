import React, {useState} from 'react';
import './addRecipeForm.module.css';
import {saveRecipe} from "../../../services/api";
import {useForm} from "react-hook-form";


function AddRecipeForm(props) {
  const { setRecipes, setShowRecipe } = props

  const {register, handleSubmit, formState: { isDirty, isValid }, reset } = useForm({ mode: "onChange" });

  const stepHtml =(id) => (
    <div key={id}>
      <label htmlFor='step'>{id+1}.</label>
      <input id='step' type='text' {...register(`${id}`, { required: true})} />
    </div>)

  const [index, setIndex] = useState(0);
  const [steps, setStep] = useState([stepHtml(index)]);

  function addStep(event) {
    event.preventDefault();
    const newIndex = index + 1
    setIndex(newIndex);
    setStep([...steps, stepHtml(newIndex)])
  }


  function onSubmit(data) {
    const {categories, ingredients, title, ...steps} = data
    const description = Object.values(steps).reduce((acc, step) => {
      acc.push(step);
      return acc;
    }, [])

    const newRecipe = {
      title,
      categories: categories.split(','),
      ingredients: ingredients.split(','),
      description
    }

    saveRecipe(newRecipe)
      .then(res => {
        updateRecipes(res)
        reset();
        setShowRecipe(false);
      })
      .catch(err => console.error(err.stack));
  }

  function updateRecipes (newRecipe) {
    setRecipes(prev => [...prev, newRecipe])
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor='title'>Name</label>
        <input id='title' type='text' {...register("title", { required: true})}/>
      </div>
      <div>
        <label htmlFor='categories'>Categories</label>
        <input id='categories' type='text' placeholder="separate with comma" {...register("categories", { required: true})}/>
      </div>
      <div>
        <label htmlFor='ingredients'>Ingredients</label>
        <input id='ingredients' type='text' placeholder="separate with comma" {...register("ingredients", { required: true})}/>
      </div>
      <div>{steps}
        <button onClick={(event) => addStep(event)}>Add step</button>
      </div>
      <button type='submit' disabled={!isDirty || !isValid} >Save recipe</button>
    </form>
  );
}

export default AddRecipeForm;