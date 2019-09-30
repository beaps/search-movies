import React, { Component } from 'react'

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
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
      .then(response => response.json())
      .then(results => {
        // console.log(results)
        const { Search, totalResults } = results
        console.log({ Search, totalResults})
        this.props.onResults(Search)
      })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <div>
          <div>
            <input
              onChange={this.handleChange}
              placeholder="Movie to search..."
              type="text"
            />
          </div>
          <div>
            <button>
              Search
          </button>
          </div>
        </div>
      </form>
    )
  }
}
