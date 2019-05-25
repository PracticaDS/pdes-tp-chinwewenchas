import React from 'react'
import PropTypes from 'prop-types'
import './NoneMachine.css'

export const NoneMachine = ({ materialCount }) => {
  return (
    <div className={'none_machine'}>
      {materialCount <= 0 ? <span /> : <span>{materialCount}</span>}
    </div>
  )
}

NoneMachine.propTypes = {
  materialCount: PropTypes.number
}
