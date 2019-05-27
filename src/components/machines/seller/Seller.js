import React from 'react'
import PropTypes from 'prop-types'
import './Seller.css'
import { connect } from 'react-redux'
import { positionSelected } from '../../factory/actions'
import { Machine } from '../machine/Machine'

export const Seller = ({ position, active, onClick, direction }) => {
  return (
    <div className="seller" onClick={() => onClick(position)}>
      <Machine
        direction={direction}
        activeImg="icons/seller_active.svg"
        inactiveImg="icons/seller.svg"
        active={active}
      />
    </div>
  )
}

Seller.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
  position: PropTypes.object,
  direction: PropTypes.object
}

const mapDispatchToProps = dispatch => ({
  onClick: position => {
    dispatch(positionSelected(position))
  }
})

const connector = connect(
  undefined,
  mapDispatchToProps
)
export default connector(Seller)
