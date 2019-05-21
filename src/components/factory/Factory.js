import { Cell } from '../cell/Cell'
import React, { Fragment } from 'react'
import { MachineCreator } from '../machines/machineCreator/MachineCreator'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  addMachine,
  rotateMachine,
  removeMachine,
  actualPosition,
  moveMachine,
  tick
} from './actions'
import './Factory.css'
import RawMaterialPopup from '../raw_material_popup/RawMaterialPopup'
import {
  FURNACE_MACHINE,
  SELLER_MACHINE,
  STARTER_MACHINE,
  TRANSPORTER_MACHINE,
  CRAFTER_MACHINE
} from '../machines/machines'

export const Factory = ({
  factory,
  addMachine,
  rotate,
  removeMachine,
  moveMachine,
  actualPosition,
  tick
}) => {
  tick()
  return (
    <Fragment>
      <button className="button" onClick={addMachine}>
        agregar
      </button>
      <button className="button" onClick={rotate}>
        girar
      </button>
      <button className="button" onClick={removeMachine}>
        borrar
      </button>
      <button className="button" onClick={moveMachine}>
        mover
      </button>
      <div className="factory">
        <table>
          <tbody>
            {Object.keys(factory)
              .map(row => {
                return (
                  <tr key={row}>
                    {Object.keys(factory[row]).map(col => {
                      return (
                        <td key={col}>
                          <div onClick={() => actualPosition(col, row)}>
                            <Cell className="factory_item">
                              <MachineCreator machine={factory[row][col]} />
                            </Cell>
                          </div>
                        </td>
                      )
                    })}
                  </tr>
                )
              })
              .flat(1)}
          </tbody>
        </table>
      </div>
      <RawMaterialPopup />
    </Fragment>
  )
}

Factory.propTypes = {
  factory: PropTypes.object,
  addMachine: PropTypes.func,
  removeMachine: PropTypes.func,
  moveMachine: PropTypes.func,
  rotate: PropTypes.func,
  tick: PropTypes.func,
  actualPosition: PropTypes.func
}

const mapStateToProps = state => {
  return {
    factory: state.factory
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addMachine: () => {
      dispatch(addMachine({ y: 0, x: 1 }, CRAFTER_MACHINE))
      dispatch(addMachine({ y: 1, x: 1 }, STARTER_MACHINE))
      dispatch(addMachine({ y: 2, x: 1 }, TRANSPORTER_MACHINE))
      dispatch(addMachine({ y: 3, x: 1 }, FURNACE_MACHINE))
      dispatch(addMachine({ y: 4, x: 1 }, SELLER_MACHINE))
    },
    rotate: () => {
      dispatch(rotateMachine({ y: 0, x: 1 }))
      dispatch(rotateMachine({ y: 1, x: 1 }))
      dispatch(rotateMachine({ y: 2, x: 1 }))
      dispatch(rotateMachine({ y: 3, x: 1 }))
      dispatch(rotateMachine({ y: 4, x: 1 }))
    },
    removeMachine: () => {
      dispatch(removeMachine({ y: 0, x: 1 }))
      dispatch(removeMachine({ y: 1, x: 1 }))
      dispatch(removeMachine({ y: 2, x: 1 }))
      dispatch(removeMachine({ y: 3, x: 1 }))
      dispatch(removeMachine({ y: 4, x: 1 }))
    },
    moveMachine: () => {
      dispatch(moveMachine({ y: 0, x: 1 }))
      dispatch(moveMachine({ y: 1, x: 1 }))
      dispatch(moveMachine({ y: 2, x: 1 }))
      dispatch(moveMachine({ y: 3, x: 1 }))
      dispatch(moveMachine({ y: 4, x: 1 }))
    },
    actualPosition: (x1, y1) => {
      dispatch(actualPosition({ y: parseInt(y1, 10), x: parseInt(x1, 10) }))
    },
    tick: () => dispatch(tick())
  }
}

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
)
export default connector(Factory)
