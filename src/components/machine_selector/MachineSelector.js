import PropTypes from 'prop-types'
import React from 'react'
import { positionSelected } from '../factory/actions'
import { connect } from 'react-redux'
import './MachineSelector.css'

export const MachineSelector = ({ children, onClick, position }) => {
  return (
    <div className="machine_selector" onClick={() => onClick(position)}>
      {children}
    </div>
  )
}

MachineSelector.propTypes = {
  children: PropTypes.object,
  position: PropTypes.object,
  onClick: PropTypes.func
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: position => dispatch(positionSelected(position))
  }
}

export default connect(
  undefined,
  mapDispatchToProps
)(MachineSelector)
