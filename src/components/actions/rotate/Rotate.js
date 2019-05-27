import React from 'react'
import { Machine } from '../../machines/machine/Machine'
import PropTypes from 'prop-types'

export const Rotate = ({ active, direction }) => {
  return (
    <div className="rotate">
      <Machine
        active={active}
        direction={direction}
        activeImg="icons/rotar_active.svg"
        inactiveImg="icons/rotar.svg"
      />
    </div>
  )
}

Rotate.propTypes = {
  active: PropTypes.bool,
  direction: PropTypes.object
}
