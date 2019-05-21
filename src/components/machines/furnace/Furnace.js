import React from 'react'
import { Machine } from '../machine/Machine'
import PropTypes from 'prop-types'

export const Furnace = ({ active, direction }) => {
  return (
    <div className="furnace">
      <Machine
        active={active}
        direction={direction}
        activeImg="icons/furnace_active.svg"
        inactiveImg="icons/furnace.svg"
      />
    </div>
  )
}

Furnace.propTypes = {
  active: PropTypes.bool,
  direction: PropTypes.object
}
