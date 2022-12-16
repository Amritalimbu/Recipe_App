import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Routers,Routes,Route } from 'react-router-dom';
import './index.css';
import App from './App';
import RecipeDetails from './RecipeDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Routers>
      <Routes>
        <Route exact path="/" element={<App/>}/>
        <Route exact path="/recipeDetails" element={<RecipeDetails/>}/>
      </Routes>
    </Routers>

);

