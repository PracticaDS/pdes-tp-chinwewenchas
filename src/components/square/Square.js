import React from 'react'

import './Square.css'
import PropTypes from 'prop-types'

export class Square extends React.Component {
  render () {
    return <div className="square empty" />
  }
}

Square.propTypes = {
  id: PropTypes.number
}
