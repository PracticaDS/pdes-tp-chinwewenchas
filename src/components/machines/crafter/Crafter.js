import React from 'react'
import { Machine } from '../machine/Machine'
import PropTypes from 'prop-types'

export const Crafter = ({ active, direction }) => {
  return (
    <div className="crafter">
      <Machine
        active={active}
        direction={direction}
        activeImg="icons/crafter_active.svg"
        inactiveImg="icons/crafter.svg"
      />
    </div>
  )
}

Crafter.propTypes = {
  active: PropTypes.bool,
  direction: PropTypes.object
}
