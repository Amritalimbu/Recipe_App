import React,{ useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import Recipe from './Recipe';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css'

function App() {
  const APP_ID = "f0d9bbd4";
  const APP_KEY = "a6d232a7bcd3ae932655262d326d3f63";
  const [recipes,setRecipes]=useState([]);
  const [search,setSearch]=useState("");
  const [query,setQuery]=useState("fish");

  useEffect(()=>{
    getData()  
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[query]);
  const getData = async () => {
    const response = await axios.get(`http://localhost:8080/https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    setRecipes(response.data.hits)
    // console.log(response.data.hits)
  };
  const updateSearch = (e)=>{
    setSearch(e.target.value)

  };
  const updateQuery=(e)=>{
    e.preventDefault();
    // e.stopPropagation();
    setQuery(search);
  };

  return (
    <div className="App">
      <form >
        <h2 id='h2'>Welcome to <span style={{color:"brown"}}>FOOD</span> <span style={{color:"green"}}>WORLD</span></h2>

        <input id="input" type='text'  onChange={updateSearch} placeholder="Search here"/>
        <button id="btn" type='submit' onClick={updateQuery}>Search</button>

      </form>

      <div className='list'>
      {recipes.map((recipe,index)=>{      
        return(
          <Recipe 
            key={index}
            id={recipe.recipe.shareAs}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories} 
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}/>)
      })}
      </div>      
    </div>
  );
}
export default App;
