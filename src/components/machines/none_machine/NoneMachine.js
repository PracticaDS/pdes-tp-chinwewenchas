import React from 'react'
import PropTypes from 'prop-types'

export const NoneMachine = ({ materialCount }) => {
  return (
    <div className={'none-machine'}>
      {materialCount <= 0 ? <span /> : <span>{materialCount}</span>}
    </div>
  )
}

NoneMachine.propTypes = {
  materialCount: PropTypes.number
}
