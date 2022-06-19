
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
    <div>{props.state1.title}</div>
    <div>{props.state1.source_url}</div>
    <div>{props.state1.recipe_id}</div>
    </>
  )

  
}

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