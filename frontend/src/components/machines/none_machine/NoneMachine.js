import React from 'react'
import PropTypes from 'prop-types'
import { positionSelected } from '../../factory/actions'
import { connect } from 'react-redux'
import './NoneMachine.css'

export const NoneMachine = ({ position, materialCount, onClick }) => {
  return (
    <div className={'none_machine'} onClick={() => onClick(position)}>
      {materialCount <= 0 ? <span /> : <span>{materialCount}</span>}
    </div>
  )
}

NoneMachine.propTypes = {
  materialCount: PropTypes.number,
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
)(NoneMachine)
