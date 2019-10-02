import React, { Component } from 'react'

import { Title } from '../components/Title'
import { SearchForm } from '../components/SearchForm'
import { MoviesList } from '../components/MoviesList'

export class Home extends Component {
  state = { usedSearch: false, results: [] }

  handleResults = (results) => {
    this.setState({ results, usedSearch: true })
  }

  renderResults() {
    return this.state.results.length === 0
      ? <p>Sorry! <span role="img" aria-label="worried face">😟</span> Results not found!</p>
      : < MoviesList movies={this.state.results} />
  }

  render() {
    return (
      <div>
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