import React from 'react'
import PropTypes from 'prop-types'
import './Transporter.css'
import { connect } from 'react-redux'
import { positionSelected } from '../../factory/actions'
import { Machine } from '../machine/Machine'

export const Transporter = ({ position, active, onClick, direction }) => {
  return (
    <div className="transporter" onClick={() => onClick(position)}>
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
export default connector(Transporter)
