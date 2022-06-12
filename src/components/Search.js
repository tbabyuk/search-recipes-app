import React, { Component } from 'react'

export class Search extends Component {
    state = { text: ''}

    onChange = (e) => {
        this.setState({ text: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.searchRecipes(this.state.text);
        this.setState( {text: ''} )
    }


  render() {
    return (
        <div>
        <form className ='search-form' onSubmit={this.onSubmit}>
          <input type='text' className ='search-field' value={this.state.text} onChange={this.onChange}></input>
          <button type='submit' className ='search-button'>Search Recipes</button>
        </form>
      </div>    )
  }
}

export default Search