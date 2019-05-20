import React from 'react'
import PropTypes from 'prop-types'
import './Starter.css'
import { connect } from 'react-redux'
import { openRawMaterialSelector } from '../../raw_material_selector/actions'
import { Machine } from '../machine/Machine'

export const Starter = ({ position, active, onClick, direction }) => {
  return (
    <div className="starter" onClick={() => onClick(position)}>
      <Machine
        direction={direction}
        activeImg="icons/starter_active.svg"
        inactiveImg="icons/starter.svg"
        active={active}
      />
    </div>
  )
}

Starter.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
  position: PropTypes.object,
  direction: PropTypes.object
}

const mapDispatchToProps = dispatch => ({
  onClick: position => dispatch(openRawMaterialSelector(position))
})
const connector = connect(
  undefined,
  mapDispatchToProps
)
export default connector(Starter)
