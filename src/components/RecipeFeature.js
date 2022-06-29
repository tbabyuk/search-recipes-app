
import { useEffect } from 'react';

function RecipeFeature(props) {
  if(props.state1) {
    console.log(props.state1.title)
  }

  useEffect(() => {
      const id = window.location.pathname.split('/')[2];
      props.getRecipe(id)
  }, [])

  if(props.state1) 
  return (
    <>
    <div className='recipe-wrapper'>
    <div className='recipe-header'>
      <img className='recipe-image' src={props.state1.image_url} />    
      <h2 className='recipe-title'>{props.state1.title}</h2>
    </div>
    <div className='ingredients-list'>
      <h3>Ingredients:</h3>
      <div className='list-items'>
      {props.state1.ingredients.map((ing, index) => {
        return <li key={index}><i className='fa fa-check' /> {ing}</li>
      })}
      </div>
    </div>
    </div>
    </>
  )

  
}


export default RecipeFeature;