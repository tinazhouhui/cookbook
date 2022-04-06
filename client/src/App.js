import './App.css';
import RecipeDashboard from "./components/dashboard/RecipeDashboard";

function App() {
  return (
    <div className="App">
      <h1>My Cookbook</h1>
      <RecipeDashboard/>
      <button>Add new recipe!</button>
    </div>
  );
}

export default App;
