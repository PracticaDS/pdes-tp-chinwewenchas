import React from 'react'
import { Machine } from '../machine/Machine'
import PropTypes from 'prop-types'
import './Furnace.css'
import { connect } from 'react-redux'
import { positionSelected } from '../../factory/actions'

export const Furnace = ({ position, active, onClick, direction }) => {
  return (
    <div className="furnace" onClick={() => onClick(position)}>
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
  onClick: PropTypes.func,
  position: PropTypes.object,
  direction: PropTypes.object
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: position => dispatch(positionSelected(position))
  }
}
const connector = connect(
  undefined,
  mapDispatchToProps
)
export default connector(Furnace)
