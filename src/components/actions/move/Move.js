import React from 'react'
import { Machine } from '../../machines/machine/Machine'
import PropTypes from 'prop-types'

export const Move = ({ active, direction }) => {
  return (
    <div className="move">
      <Machine
        active={active}
        direction={direction}
        activeImg="icons/mover_active.svg"
        inactiveImg="icons/mover.svg"
      />
    </div>
  )
}

Move.propTypes = {
  active: PropTypes.bool,
  direction: PropTypes.object
}
