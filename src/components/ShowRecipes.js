import React from 'react';
import Recipe from './Recipe';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

const ShowRecipes = ({ results, loading}) => {

    if(loading) {
      return <Spinner />
    } else {
    return (
      <div className='show-recipes'>
        {results?.map((recipe, index) => (
          <Recipe key={index} title={recipe.title} url={recipe.image_url} source={recipe.source_url} id={recipe.recipe_id} />
        ))}
      </div>
    );
  }}

  ShowRecipes.propTypes = {
    results: PropTypes.array,
    loading: PropTypes.bool.isRequired
  }

export default ShowRecipes;
