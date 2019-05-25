import React from 'react'
import PropTypes from 'prop-types'
import Starter from '../starter/Starter'
import {
  FURNACE_MACHINE,
  SELLER_MACHINE,
  STARTER_MACHINE,
  TRANSPORTER_MACHINE
} from '../machines'
import { Transporter } from '../transporter/Transporter'
import { Furnace } from '../furnace/Furnace'
import { Seller } from '../seller/Seller'
import MachineSelector from '../../machine_selector/MachineSelector'
import { NoneMachine } from '../none_machine/NoneMachine'

function mapMachine (machine) {
  switch (machine.type) {
    case STARTER_MACHINE:
      return <Starter {...machine.props} />
    case TRANSPORTER_MACHINE:
      return <Transporter {...machine.props} />
    case FURNACE_MACHINE:
      return <Furnace {...machine.props} />
    case SELLER_MACHINE:
      return <Seller {...machine.props} />
    default:
      return <NoneMachine {...machine.props} />
  }
}

export const MachineCreator = ({ machine }) => {
  return (
    <MachineSelector position={machine.props.position}>
      {mapMachine(machine)}
    </MachineSelector>
  )
}

MachineCreator.propTypes = {
  machine: PropTypes.object
}
