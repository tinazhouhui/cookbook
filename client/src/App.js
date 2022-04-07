import './App.css';
import Cookbook from "./cookbook/Cookbook";
import { Routes, Route } from "react-router-dom";
import React from "react";
import RecipeDetail from "./RecipeDetail/RecipeDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Cookbook/>}/>
        <Route path=":id" element={<RecipeDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
