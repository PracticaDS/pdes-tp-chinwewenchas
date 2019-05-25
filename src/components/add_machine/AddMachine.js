import PropTypes from 'prop-types'
import React from 'react'
import { selectMachineForAddition } from '../factory/actions'
import { connect } from 'react-redux'
import './AddMachine.css'
export const AddMachine = ({
  machineType,
  children,
  selectMachine,
  selectedMachineType
}) => {
  const selected = machineType === selectedMachineType
  return (
    <div
      onClick={() => selectMachine(machineType)}
      className={`add_machine ${selected ? 'add_machine_active' : ''}`}
    >
      {children}
    </div>
  )
}

AddMachine.propTypes = {
  machineType: PropTypes.string,
  children: PropTypes.object,
  selectMachine: PropTypes.func,
  selectedMachineType: PropTypes.string
}

const mapStateToProps = state => {
  return {
    selectedMachineType: state.factory.actionSelected.machineType
  }
}
const mapDispatchToProps = dispatch => {
  return {
    selectMachine: machineType =>
      dispatch(selectMachineForAddition(machineType))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddMachine)
