import React from 'react'
import { Machine } from '../machine/Machine'
import PropTypes from 'prop-types'

export const Seller = ({ active, direction }) => {
  return (
    <div className="seller">
      <Machine
        active={active}
        direction={direction}
        activeImg="icons/seller_active.svg"
        inactiveImg="icons/seller.svg"
      />
    </div>
  )
}

Seller.propTypes = {
  active: PropTypes.bool,
  direction: PropTypes.object
}
