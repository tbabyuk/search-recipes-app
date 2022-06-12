import React, { Component } from 'react';
import Recipe from './Recipe';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

const ShowRecipes = ({ results, loading}) => {

  
  // state = {
  //   recipes: [
  //     {
  //       title: 'Best Pizza Dough Ever',
  //       image_url:
  //         'http://forkify-api.herokuapp.com/images/best_pizza_dough_recipe1b20.jpg',
  //       source_url: 'http://www.101cookbooks.com/archives/001199.html'
  //     },
  //     {
  //       title: 'Pizza Dip',
  //       image_url:
  //         'http://forkify-api.herokuapp.com/images/Pizza2BDip2B12B500c4c0a26c.jpg',
  //       source_url: 'http://www.closetcooking.com/2011/03/pizza-dip.html'
  //     },
  //     {
  //       title: 'Pizza Potato Skins',
  //       image_url:
  //         'http://forkify-api.herokuapp.com/images/pizza3464.jpg',
  //       source_url: 'http://thepioneerwoman.com/cooking/2013/04/pizza-potato-skins/'
  //     }
  //   ],
  // };

    if(loading) {
      return <Spinner />
    } else {
    return (
      <div className='show-recipes'>
        {results?.map((recipe, index) => (
          <Recipe key={index} title={recipe.title} url={recipe.image_url} source={recipe.source_url} />
        ))}
      </div>
    );
  }}

  ShowRecipes.propTypes = {
    results: PropTypes.array,
    loading: PropTypes.bool.isRequired
  }

export default ShowRecipes;
