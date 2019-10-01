import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Movie extends Component {
  static propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.string,
    poster: PropTypes.string,
  }

  render() {
    const { id, title, year, poster } = this.props

    return(
      <a href={`?id=${id}`} className="card">
        <div className="card-image">
          <figure className="image">
            <img 
              src={poster}
              alt={title}
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <h2 className="title">{title}</h2>
              <p className="subtitle">{year}</p>
            </div>
          </div>
        </div>
      </a>
    )
  }
}

