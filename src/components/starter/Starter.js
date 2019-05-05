import React from 'react'
import PropTypes from 'prop-types'
import './Starter.css'

const imageFromState = state => {
  if (state) {
    return '/icons/starter_active.svg'
  } else {
    return '/icons/starter.svg'
  }
}

const doTick = (id, active, tick, onTick) => {
  if (active && tick) {
    onTick(id)
  }
}

export const Starter = ({ id, active, onClick, tick, onTick }) => {
  doTick(id, active, tick, onTick)
  return (
    <div className="starter" onClick={onClick}>
      <img src={imageFromState(active)} />
    </div>
  )
}

Starter.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
  id: PropTypes.number,
  tick: PropTypes.bool,
  onTick: PropTypes.func
}
