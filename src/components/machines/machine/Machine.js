import React from 'react'
import PropTypes from 'prop-types'

const image = (active, activeImg, inactiveImg) => {
  if (active) {
    return activeImg
  } else {
    return inactiveImg
  }
}

const directionToRotation = direction => {
  return {
    transform: `rotate(${direction.rotation}turn)`
  }
}

export const Machine = ({ active, direction, activeImg, inactiveImg }) => {
  return (
    <img
      style={directionToRotation(direction)}
      src={image(active, activeImg, inactiveImg)}
      alt="machine"
    />
  )
}

Machine.propTypes = {
  active: PropTypes.bool,
  direction: PropTypes.object,
  activeImg: PropTypes.string,
  inactiveImg: PropTypes.string
}
