import React from 'react'
import PropTypes from 'prop-types'
import Starter from '../starter/Starter'
import { NoneMachine } from '../none_machine/NoneMachine'
import { STARTER_MACHINE } from '../machines'

export const Machine = ({ machine }) => {
  switch (machine.type) {
    case STARTER_MACHINE:
      return <Starter {...machine.props} />
    default:
      return <NoneMachine {...machine.props} />
  }
}

Machine.propTypes = {
  machine: PropTypes.object
}
