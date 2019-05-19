import React from 'react'
import PropTypes from 'prop-types'
import Starter from '../starter/Starter'
import { NoneMachine } from '../none_machine/NoneMachine'
import { STARTER_MACHINE, TRANSPORTER_MACHINE } from '../machines'
import { Transporter } from '../transporter/Transporter'

function mapMachine (machine) {
  switch (machine.type) {
    case STARTER_MACHINE:
      return <Starter {...machine.props} />
    case TRANSPORTER_MACHINE:
      return <Transporter {...machine.props} />
    default:
      return <NoneMachine {...machine.props} />
  }
}

export const MachineCreator = ({ machine }) => {
  return <div>{mapMachine(machine)}</div>
}

MachineCreator.propTypes = {
  machine: PropTypes.object
}
