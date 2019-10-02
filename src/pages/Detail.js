import React, { Component } from 'react'
import PropTypes from 'prop-types'

const API_KEY = '7ab239d9'

export class Detail extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
      isExact: PropTypes.bool,
      path: PropTypes.string,
      url: PropTypes.string
    })
  }

  state = { movie: {} }

  fetchMovie({ id }) {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      .then(response => response.json())
      .then(movie => {
        this.setState({ movie })
      })
  }

  goBack() {
    window.history.back()
  }

  componentDidMount() {
    const { movieId } = this.props.match.params
    this.fetchMovie({ id: movieId })
  }

  render() {
    const { Title, Poster, Actors, Metascore, Plot } = this.state.movie

    return (
      <div>
        <button onClick={this.goBack}>Volver</button>
        <h1>{Title}</h1>
        <img src={Poster} alt={Title} />
        <h3>{Actors}</h3>
        <span>{Metascore}</span>
        <p>{Plot}</p>
      </div>
    )
  }
}