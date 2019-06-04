import React from 'react'
import { Machine } from '../../machines/machine/Machine'
import PropTypes from 'prop-types'

export const Remove = ({ active, direction }) => {
  return (
    <div className="remove">
      <Machine
        active={active}
        direction={direction}
        activeImg="icons/eliminar_active.svg"
        inactiveImg="icons/eliminar.svg"
      />
    </div>
  )
}

Remove.propTypes = {
  active: PropTypes.bool,
  direction: PropTypes.object
}
