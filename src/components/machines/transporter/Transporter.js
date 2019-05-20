import React from 'react'

import './Transporter.css'
import { Machine } from '../machine/Machine'
import PropTypes from 'prop-types'

export const Transporter = ({ active, direction }) => {
  return (
    <div className="transporter">
      <Machine
        active={active}
        direction={direction}
        activeImg="icons/transporter_active.svg"
        inactiveImg="icons/transporter.svg"
      />
    </div>
  )
}

Transporter.propTypes = {
  active: PropTypes.bool,
  direction: PropTypes.object
}
