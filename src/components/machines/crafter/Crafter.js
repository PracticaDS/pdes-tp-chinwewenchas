import React from 'react'
import { Machine } from '../machine/Machine'
import PropTypes from 'prop-types'
import './Crafter.css'
import { connect } from 'react-redux'
import { positionSelected } from '../../factory/actions'

export const Crafter = ({ position, active, onClick, direction }) => {
  return (
    <div className="crafter" onClick={() => onClick(position)}>
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
export default connector(Crafter)
