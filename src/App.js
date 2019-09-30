import React, { Component} from 'react';

import { Title } from './components/Title'
import { SearchForm } from './components/SearchForm'
import { MoviesList } from './components/MoviesList'

import './App.css';

class App extends Component {
  state = { results: [] }

  handleResults = (results) => {
    this.setState({ results})
  }

  render() {
    return (
      <div className="App">
        <Title>Search Movies</Title>
        <SearchForm onResults={this.handleResults} />
        {this.state.results.length === 0
          ? <p>Sin resultados</p>
          : < MoviesList movies={this.state.results} />
        }
      </div>
    )
  }
}

export default App;
