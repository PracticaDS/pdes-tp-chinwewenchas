import React from 'react'
import PropTypes from 'prop-types'
import {
  FURNACE_MACHINE,
  SELLER_MACHINE,
  STARTER_MACHINE,
  TRANSPORTER_MACHINE,
  CRAFTER_MACHINE
} from '../machines'
import { Starter } from '../starter/Starter'
import { NoneMachine } from '../none_machine/NoneMachine'
import { Transporter } from '../transporter/Transporter'
import { Furnace } from '../furnace/Furnace'
import { Seller } from '../seller/Seller'
import { Crafter } from '../crafter/Crafter'

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
    case CRAFTER_MACHINE:
      return <Crafter {...machine.props} />
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
