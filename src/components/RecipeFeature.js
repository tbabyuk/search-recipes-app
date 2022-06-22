
import { useState, useEffect } from 'react';

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

// const styles = {
//   background: `{props.state1.image_url}`
// }

export default RecipeFeature


// class RecipeFeature extends Component {

//     componentDidMount() {
//       const id = window.location.pathname.split('/')[2];
//       this.props.getRecipe(id)
//     }

//   render() {
//     // console.log(this.props.state1)
//     // const {title, image_url} = this.props.state1;
//     return (
//       <Fragment>
//             {/* {this.props.state1.title} */}Hi
//       </Fragment>
//     )
//   }
// }

// export default RecipeFeature