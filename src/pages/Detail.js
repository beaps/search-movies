import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { ButtonBackToHome } from '../components/ButtonBackToHome'
import { ActorsList } from '../components/ActorsList'

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
        console.log(movie)
        this.setState({ movie })
      })
  }

  componentDidMount() {
    const { movieId } = this.props.match.params
    this.fetchMovie({ id: movieId })
  }

  render() {
    const { Title, Poster, Actors, Metascore, Plot } = this.state.movie

    return (
      <div>
        <ButtonBackToHome />
        <div className="detail__grid-container">
          <h1 className="detail__title">{Title}</h1>
          <div className="detail__img-container">
            <img className="detail__img" src={Poster} alt={Title} />
            <span className="detail__score">{Metascore}</span>
          </div>
          <ActorsList actors={Actors ? Actors.split(', ') : []} />
          <p className="detail__plot">{Plot}</p>
          <div className="detail__background"></div>
        </div>
      </div>
    )
  }
}