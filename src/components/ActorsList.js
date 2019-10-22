import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class ActorsList extends Component {
  static propTypes = {
    actors: PropTypes.array
  }

  render() {
    const { actors } = this.props
    let id = 0
    return (
      <div className="actorsList">
        {
          actors.map((actor, index) => {
            return (
              <p key={id++}>{actor}</p>
            )
          })
        }
      </div>
    )
  }
}