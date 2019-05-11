import React from 'react'

import './Transporter.css'
import PropTypes from 'prop-types'
import daggy from 'daggy'

export class Transporter extends React.Component {
  moveMaterialToDirection (material) {
    // Todo: mejorar esto cuando exista la Toolbar
    this.props.direction.cata({
      Left: () => material.moveX(-1),
      Right: () => material.moveX(1),
      Down: () => material.moveY(-1),
      Up: () => material.moveY(1)
    })
  }

  render () {
    return <div className="transporter" />
  }
}
const directions = daggy.taggedSum('directions', {
  Left: 'left',
  Right: 'right',
  Down: 'down',
  Up: 'up'
})

Transporter.propTypes = {
  direction: PropTypes.oneOf(Object.keys(directions))
}
