import { Cell } from '../cell/Cell'
import React, { Fragment } from 'react'
import { MachineCreator } from '../machines/machineCreator/MachineCreator'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addMachine, rotateMachine, tick } from './actions'
import './Factory.css'
import RawMaterialPopup from '../raw_material_popup/RawMaterialPopup'
import {
  FURNACE_MACHINE,
  SELLER_MACHINE,
  STARTER_MACHINE,
  TRANSPORTER_MACHINE
} from '../machines/machines'

export const Factory = ({ factory, addMachine, rotate, tick }) => {
  tick()
  return (
    <Fragment>
      <button onClick={addMachine}>agregar</button>
      <button onClick={rotate}>girar</button>
      <div className="factory">
        <table>
          {Object.keys(factory)
            .map(row => {
              return (
                <tr key={row}>
                  {Object.keys(factory[row]).map(col => {
                    return (
                      <td key={col}>
                        <Cell className="factory_item">
                          <MachineCreator machine={factory[row][col]} />
                        </Cell>
                      </td>
                    )
                  })}
                </tr>
              )
            })
            .flat(1)}
        </table>
      </div>
      <RawMaterialPopup />
    </Fragment>
  )
}

Factory.propTypes = {
  factory: PropTypes.object,
  addMachine: PropTypes.func,
  rotate: PropTypes.func,
  tick: PropTypes.func
}

const mapStateToProps = state => {
  return {
    factory: state.factory
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addMachine: () => {
      dispatch(addMachine({ y: 1, x: 1 }, STARTER_MACHINE))
      dispatch(addMachine({ y: 2, x: 1 }, TRANSPORTER_MACHINE))
      dispatch(addMachine({ y: 3, x: 1 }, FURNACE_MACHINE))
      dispatch(addMachine({ y: 4, x: 1 }, SELLER_MACHINE))
    },
    rotate: () => dispatch(rotateMachine({ y: 1, x: 1 })),
    tick: () => dispatch(tick())
  }
}

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
)
export default connector(Factory)
