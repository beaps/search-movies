import React, { Component } from 'react'

export class SearchForm extends Component {
  state = {
    inputMovie: ''
  }

  handleChange = (e) => {
    this.setState({ inputMovie: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    alert(this.state.inputMovie)
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

