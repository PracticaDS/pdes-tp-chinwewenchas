import React from 'react'
import PropTypes from 'prop-types'
import './RemoveMachine.css'
import { REMOVE_MACHINE_ACTION } from '../factory/factoryLib'
import { connect } from 'react-redux'
import { activateMachineRemoval } from '../factory/actions'

export const RemoveMachine = ({
  children,
  activateMachineRemoval,
  selected
}) => {
  return (
    <div
      onClick={activateMachineRemoval}
      className={`remove_machine ${selected ? 'remove_machine_active' : ''}`}
    >
      {children}
    </div>
  )
}

RemoveMachine.propTypes = {
  children: PropTypes.object,
  activateMachineRemoval: PropTypes.func,
  selected: PropTypes.bool
}

const mapStateToProps = state => {
  const selected =
    state.factory.actionSelected.actionType === REMOVE_MACHINE_ACTION
  return {
    selected: selected
  }
}

const mapDispatchToProps = dispatch => {
  return {
    activateMachineRemoval: () => dispatch(activateMachineRemoval())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RemoveMachine)
