import React from 'react'
import { Link } from 'react-router-dom'
import './Recipe.css'

const Recipe = (props) => {

const {title,calories,image,ingredients}=props
  return (
    
      <div className='prop' id="div">
        {/* <Link to="/recipedetails" state={{t:title,img:image,calories:calories,ingredients:ingredients}}>Go to RecipeDetails</Link> */}
        
        <p id="title" style={{fontSize:"large"}}><u>{title}</u></p>
        <p style={{color:"rgb(26, 25, 25)", fontFamily:"Verdana, Geneva, Tahoma, sans-serif",width:'100%'}}><u>Calories</u>: {calories}</p>
        <img id='img' src={image} alt=''/>

        <select id='select'>
          <option>Ingredients</option>
            {ingredients.map((ingredient,index)=>(
          <option key={index}>{ingredient.text}</option>))}         
        </select>
        
        <Link to="/recipedetails" state={{title:title,img:image,calories:calories,ingredients:ingredients}}>Go to RecipeDetails</Link>
      
      </div>
  )
}

export default Recipe

