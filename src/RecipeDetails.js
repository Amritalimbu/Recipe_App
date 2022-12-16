import React from 'react'
import "./RecipeDetails.css"
import {useLocation,Link} from "react-router-dom"

function RecipeDetails() {
 const data=useLocation()
  return (
    <div id='RD'>
      <div id="RN"><strong><u><span style={{color:"brown"}}>R</span>ecipe<span style={{color:"green"}}>D</span>etails</u></strong>
        <div id="Home"> 
          <Link to="/" id='link' >Home</Link>
        </div> 
      </div>  
   
      <p><strong>DISH NAME : </strong>{data.state.title}</p>
      <p><strong>CALORISES : </strong>{data.state.calories}</p>

      <img id='img2' src={data.state.img} alt=''/> 

      <p><strong><u>INGREDIENTS : </u></strong></p>
      {data.state.ingredients.map((ingredient,i)=>(
      <p><strong>{i+1})</strong> {ingredient.text}</p>          
      ))}  
    </div>
  )
}

export default RecipeDetails
