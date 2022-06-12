import React from 'react';
import PropTypes from 'prop-types';

const Recipe = ({title, url, source}) => {
  // state = {
  //   title: 'best Pizza Dough Ever',
  //   image_url: 'http://forkify-api.herokuapp.com/images/best_pizza_dough_recipe1b20.jpg',
  //   source_url: 'http://www.101cookbooks.com/archives/001199.html'
  // }

    // const { title, url, source } = props;

    return (
      <>
      <div className ='single-recipe'>
        <h3>{title}</h3>
        <img className ='img-round' src={url}></img>
        <a className ='btn-link' href={source} target='_blank'>view original recipe</a>
      </div>
      </>
    )
  }

Recipe.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired
}

export default Recipe;