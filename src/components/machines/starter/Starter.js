import React from 'react'
import PropTypes from 'prop-types'
import './Starter.css'
import { connect } from 'react-redux'
import { openRawMaterialSelector } from '../../raw_material_selector/actions'

const image = active => {
  if (active) {
    return '/icons/starter_active.svg'
  } else {
    return '/icons/starter.svg'
  }
}

const directionToRotation = direction => {
  return {
    transform: `rotate(${direction.rotation}turn)`
  }
}

export const Starter = ({ id, active, onClick, direction }) => {
  return (
    <div className="starter" onClick={() => onClick(id)}>
      <img
        style={directionToRotation(direction)}
        src={image(active)}
        alt="machine"
      />
    </div>
  )
}

Starter.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
  id: PropTypes.object,
  direction: PropTypes.object
}

const mapDispatchToProps = dispatch => ({
  onClick: id => dispatch(openRawMaterialSelector(id))
})
const connector = connect(
  undefined,
  mapDispatchToProps
)
export default connector(Starter)
