import React from 'react'
import PropTypes from 'prop-types'
import './Crafter.css'
import { connect } from 'react-redux'
import { positionSelected } from '../../factory/actions'
import { Machine } from '../machine/Machine'

export const Crafter = ({ position, active, onClick, direction }) => {
  return (
    <div className="crafter" onClick={() => onClick(position)}>
      <Machine
        direction={direction}
        activeImg="icons/crafter_active.svg"
        inactiveImg="icons/crafter.svg"
        active={active}
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

const mapDispatchToProps = dispatch => ({
  onClick: position => {
    dispatch(positionSelected(position))
  }
})

const connector = connect(
  undefined,
  mapDispatchToProps
)
export default connector(Crafter)
