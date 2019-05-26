import React from 'react'
import { Machine } from '../machine/Machine'
import PropTypes from 'prop-types'
import { positionSelected } from '../../factory/actions'
import { connect } from 'react-redux'

export const Seller = ({ position, active, direction, onClick }) => {
  return (
    <div className="seller" onClick={() => onClick(position)}>
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
  direction: PropTypes.object,
  onClick: PropTypes.func,
  position: PropTypes.object
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: position => dispatch(positionSelected(position))
  }
}

export default connect(
  undefined,
  mapDispatchToProps
)(Seller)
