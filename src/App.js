import './App.css';
import React, {Fragment, Component} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Search from './components/Search';
import ShowRecipes from './components/ShowRecipes';
import Alert from './components/Alert';
import About from './components/pages/About';

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
  setAlert = msg => {
    this.setState( {alert: msg})
    //Another option is to set alert to display for several seconds, as with code below
    // setTimeout(() => this.setState({ alert: null }), 4000)
  }

render() {
  return (
    <Router>
    <div className="App">
        <Navbar animal={this.state.recipes}/>
        <Routes>
          <Route exact path='/' element = {
            <Fragment>
              <Search searchRecipes={this.searchRecipes} recipesFetched={this.state.recipes.count > 0} clearRecipes={this.clearRecipes} setAlert={this.setAlert}  />
              <ShowRecipes results={this.state.recipes.recipes} loading={this.state.loading}/>
              {this.state.alert && (<Alert alert={this.state.alert} />)}
            </Fragment>
          } />
          <Route exact path='/about' element={<About />} />
        </Routes>
    </div>
    </Router>
  );
}
}

export default App;
