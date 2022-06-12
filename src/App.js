import './App.css';
import React, {Component} from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';
import ShowRecipes from './components/ShowRecipes';

class App extends Component {

  state = {
    recipes: [],
    loading: false
  }

  searchRecipes = async text => {
    this.setState({loading: true})
    const res = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${text}`)
    const data = await res.json()
    this.setState({ recipes: data, loading: false })
  }


render() {
  return (
    <div className="App">
        <Navbar animal={this.state.recipes}/>
        <Search searchRecipes={this.searchRecipes}/>
        <ShowRecipes results={this.state.recipes.recipes} loading={this.state.loading}/>
    </div>
  );
}
}

export default App;
