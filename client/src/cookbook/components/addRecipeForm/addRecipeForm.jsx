import React, {useState} from 'react';
import styles from './addRecipeForm.module.css';
import {saveRecipe} from "../../../services/api";
import {useForm} from "react-hook-form";


function AddRecipeForm(props) {
  const {setRecipes, setShowRecipe} = props

  const {register, handleSubmit, formState: {isDirty, isValid}, reset, unregister} = useForm({mode: "onChange"});

  const stepHtml = (id) => (
    <div key={id}>
      <label htmlFor='step'>{id + 1}.</label>
      <input className={styles.inputField} id='step' type='text' {...register(`${id}`, {required: true})} />
    </div>)

  const [index, setIndex] = useState(0);
  const [steps, setStep] = useState([stepHtml(index)]);

  function addStep(event) {
    event.preventDefault();
    const newIndex = index + 1
    setIndex(newIndex);
    setStep([...steps, stepHtml(newIndex)])
  }

  function deleteStep(event) {
    event.preventDefault();
    const newIndex = index - 1
    unregister(`${index}`)
    setIndex(newIndex);
    setStep(steps.slice(0, index))
  }

  function onSubmit(data) {
    const {categories, ingredients, title, ...steps} = data
    console.log(data)
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

  function updateRecipes(newRecipe) {
    setRecipes(prev => [...prev, newRecipe])
  }

  return (
    <form className={styles.addRecipeForm} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor='title'>Name</label>
        <input className={styles.inputField} id='title' type='text' {...register("title", {required: true})}/>
      </div>
      <div>
        <label htmlFor='categories'>Categories</label>
        <input className={styles.inputField} id='categories' type='text'
               placeholder="separate with comma" {...register("categories", {required: true})}/>
      </div>
      <div>
        <label htmlFor='ingredients'>Ingredients</label>
        <input className={styles.inputField} id='ingredients' type='text'
               placeholder="separate with comma" {...register("ingredients", {required: true})}/>
      </div>
      {steps}
      <button className={styles.addStep} onClick={addStep}>+</button>
      <button className={styles.addStep} onClick={deleteStep}>-</button>

      <button className={styles.saveRecipe} type='submit' disabled={!isDirty || !isValid}>Save recipe</button>
    </form>
  );
}

export default AddRecipeForm;