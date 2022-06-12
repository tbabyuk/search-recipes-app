import './App.css';
import React, {Component} from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';
import ShowRecipes from './components/ShowRecipes';
import Alert from './components/Alert';

class App extends Component {

  state = {
    recipes: [],
    loading: false,
    alert: null
  }

  //Search for recipes
  searchRecipes = async text => {
    this.setState({loading: true})
    const res = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${text}`)
    const data = await res.json()
    this.setState({ recipes: data, loading: false })
  }

  //Clear recipes from state
  clearRecipes = () => this.setState({ recipes: [], loading: false });

  //Set Alert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type }})
  }

render() {
  return (
    <div className="App">
        <Navbar animal={this.state.recipes}/>
        {this.state.alert && (<Alert />)}
        <Search searchRecipes={this.searchRecipes} recipesFetched={this.state.recipes.count > 0} clearRecipes={this.clearRecipes} setAlert={this.setAlert}  />
        <ShowRecipes results={this.state.recipes.recipes} loading={this.state.loading}/>
    </div>
  );
}
}

export default App;
