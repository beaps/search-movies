import React, { Component } from 'react'

import { SearchIcon } from './SearchIcon'

const API_KEY = '7ab239d9'

export class SearchForm extends Component {
  state = {
    inputMovie: ''
  }

  handleChange = (e) => {
    this.setState({ inputMovie: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { inputMovie } = this.state
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
      .then(response => response.json())
      .then(results => {
        const { Search = [], totalResults = '0' } = results
        this.props.onResults(Search)
      })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <div className="search-container">
          <div>
            <input
              className='search-container__input'
              onChange={this.handleChange}
              placeholder="Movie to search..."
              type="text"
            />
          </div>
          <div>
            <button className='search-container__button' type="submit" aria-label="search">
              <SearchIcon />
          </button>
          </div>
        </div>
      </form>
    )
  }
}

