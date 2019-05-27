import PropTypes from 'prop-types'
import React from 'react'
import { selectActionForMachine } from '../factory/actions'
import { connect } from 'react-redux'
import './ActionForMachine.css'

export const ActionForMachine = ({
  actionType,
  children,
  selectAction,
  selectedActionType
}) => {
  const selected = actionType === selectedActionType
  return (
    <div
      onClick={() => selectAction(actionType)}
      className={`action_machine ${selected ? 'action_machine_active' : ''}`}
    >
      {children}
    </div>
  )
}

ActionForMachine.propTypes = {
  actionType: PropTypes.string,
  children: PropTypes.object,
  selectAction: PropTypes.func,
  selectedActionType: PropTypes.string
}

const mapStateToProps = state => {
  return {
    selectedActionType: state.factory.actionSelected.actionType
  }
}
const mapDispatchToProps = dispatch => {
  return {
    selectAction: actionType => dispatch(selectActionForMachine(actionType))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActionForMachine)
