import React, { Component} from 'react';

import { Title } from './components/Title'
import { SearchForm } from './components/SearchForm'
import { MoviesList } from './components/MoviesList'

import { Detail } from './pages/Detail'

import './App.css';

class App extends Component {
  state = { usedSearch: false, results: [] }

  handleResults = (results) => {
    this.setState({ results, usedSearch: true})
  }

  renderResults() {
    return this.state.results.length === 0
      ? <p>Sorry! <span role="img" aria-label="worried face">😟</span> Results not found!</p>
      : < MoviesList movies={this.state.results} />
  }

  render() {
    const url = new URL(document.location)
    const hasId = url.searchParams.has('id')

    if (hasId) {
      return <Detail id={url.searchParams.get('id')} />
    }

    return (
      <div className="App">
        <Title>Search Movies</Title>
        <SearchForm onResults={this.handleResults} />
        {this.state.usedSearch
          ? this.renderResults()
          : <small>Use the form to search a movie</small>
        }
      </div>
    )
  }
}

export default App;
