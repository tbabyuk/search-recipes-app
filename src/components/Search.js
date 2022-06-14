import React, { Component } from 'react';
import PropTypes from 'prop-types';



export class Search extends Component {
  state = { text: '' };

  static propTypes = {
    searchRecipes: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ text: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    if(this.state.text === '') {
      this.props.setAlert('Please enter something');
    } else {
    this.props.searchRecipes(this.state.text);
    this.setState({ text: '' });
    this.props.setAlert(null)
  }
  };

  render() {
    return (
      <div>
        <form className='search-form' onSubmit={this.onSubmit}>
          <input type='text' className='search-field' placeholder='Search recipes...' value={this.state.text} onChange={this.onChange}></input>
          <button type='submit' className='search-button'>Search Recipes</button>
          {this.props.recipesFetched && <button className='clear-button' onClick={this.props.clearRecipes}>Clear Recipes</button>}
        </form>
      </div>
    );
  }
}

export default Search;
