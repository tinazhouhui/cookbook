import './App.css';
import RecipeDashboard from "./components/dashboard/RecipeDashboard";
import AddRecipeForm from "./components/addRecipeForm/addRecipeForm";
import {useState} from "react";

function App() {
  const [showRecipeForm, setShowRecipe] = useState(false);

  return (
    <div className="App">
      <h1>My Cookbook</h1>
      <RecipeDashboard/>
      <button onClick={() => setShowRecipe(!showRecipeForm)}>Add new recipe!</button>
      {showRecipeForm && <AddRecipeForm/>}
    </div>
  );
}

export default App;
