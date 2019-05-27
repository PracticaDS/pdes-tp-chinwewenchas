import React from 'react'
import PropTypes from 'prop-types'
import Starter from '../starter/Starter'
import NoneMachine from '../none_machine/NoneMachine'
import Transporter from '../transporter/Transporter'
import Furnace from '../furnace/Furnace'
import Seller from '../seller/Seller'
import Crafter from '../crafter/Crafter'
import {
  CRAFTER_MACHINE,
  FURNACE_MACHINE,
  SELLER_MACHINE,
  STARTER_MACHINE,
  TRANSPORTER_MACHINE
} from '../machines'
import { column, row } from '../direction'

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
  let position = machine.props.position
  return (
    <div
      style={{ width: '100%', height: '100%' }}
      position={`${row(position)}${column(position)}`}
    >
      {mapMachine(machine)}
    </div>
  )
}

MachineCreator.propTypes = {
  machine: PropTypes.object
}
