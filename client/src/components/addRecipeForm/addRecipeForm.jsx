import React, {useState} from 'react';
import './addRecipeForm.module.css';
import {saveRecipe} from "../../services/api";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [categories, setCategories] = useState([]);
  const [description, setDescription] = useState([]);
  const [ingredients, setIngredients] = useState([]);



  const stepHtml =(id) => (
    <div key={id}>
      <label htmlFor='step'>{id}.</label>
      <input id='step' type='text' value={description[id]} onChange={(event) => handleDescription(event, id)} />
    </div>)

  const [index, setIndex] = useState(0);
  const [steps, setStep] = useState([stepHtml(index)]);

  function addStep(event) {
    event.preventDefault();
    const newIndex =index + 1
    setIndex(newIndex);
    setStep([...steps, stepHtml(newIndex)])
  }

  function handleTitle(event) {
    event.preventDefault();
    setTitle(event.target.value)
  }

  function handleIngredients(event) {
    event.preventDefault();
    setIngredients(event.target.value.split(','));
  }

  function handleCategories(event) {
    event.preventDefault();
    setCategories(event.target.value.split(','));
  }

  function handleDescription(event,elIndex){
    event.preventDefault();
    const descCopy = [...description]
    descCopy[elIndex] = event.target.value
    setDescription(descCopy)
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newRecipe = {
      title: title,
      description,
      categories,
      ingredients
    };

    saveRecipe(newRecipe)
      .then(res => console.log(res))
      .catch(err => console.error(err.stack));
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='title'>Name</label>
        <input id='title' type='text' value={title} onChange={handleTitle}/>
      </div>
      <div>
        <label htmlFor='categories'>Categories</label>
        <input id='categories' type='text' value={categories} placeholder="separate with comma" onChange={handleCategories}/>
      </div>
      <div>
        <label htmlFor='ingredients'>Ingredients</label>
        <input id='ingredients' type='text' value={ingredients} placeholder="separate with comma" onChange={handleIngredients}/>
      </div>
      <div>{steps}
        <button onClick={(event) => addStep(event)}>Add step</button>
      </div>
      <button type='submit'>Save recipe</button>
    </form>
  );
}

export default AddRecipeForm;