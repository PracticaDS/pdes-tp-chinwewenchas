import React from 'react'

import './Square.css'
import PropTypes from 'prop-types'

export class Square extends React.Component {
  render () {
    if (this.props.path == null) {
      return <div className="square" />
    } else {
      return (
        <div className="square">
          <img src={this.props.path} />
        </div>
      )
    }
  }
}

Square.propTypes = {
  id: PropTypes.number,
  path: PropTypes.string
}
