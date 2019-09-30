import React, { Component} from 'react';

import { Title } from './components/Title'
import { SearchForm } from './components/SearchForm'
import { Movie } from './components/Movie'

import './App.css';

class App extends Component {
  state = { results: [] }

  handleResults = (results) => {
    this.setState({ results})
  }

  renderResults = () => {
    const { results } = this.state
    return results.map(movie => {
      return (
        <Movie
          key={movie.imdbID}
          title={movie.Title}
          year={movie.Year}
          poster={movie.Poster}
        />
      )
    })
  }

  render() {
    return (
      <div className="App">
        <Title>Search Movies</Title>
        <SearchForm onResults={this.handleResults} />
        {this.state.results.length === 0
          ? <p>Sin resultados</p>
          : this.renderResults()
        }
      </div>
    )
  }
}

export default App;
