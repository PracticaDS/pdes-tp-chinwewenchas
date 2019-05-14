import { Cell } from '../cell/Cell'
import React from 'react'
import { Machine } from '../machines/machine/Machine'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addMachine, rotateMachine, tick } from './actions'
import './Factory.css'
import RawMaterialPopup from '../raw_material_popup/RawMaterialPopup'
import { STARTER_MACHINE } from '../machines/machines'

export const Factory = ({ factory, addMachine, rotate, tick }) => {
  tick()
  return (
    <div className="factory">
      <button onClick={addMachine}>agregar</button>
      <button onClick={rotate}>girar</button>
      {Object.keys(factory)
        .map(row => {
          return (
            <div key={row}>
              {Object.keys(factory[row]).map(col => {
                return (
                  <Cell key={col} className="factory_item">
                    <Machine machine={factory[row][col]} />
                  </Cell>
                )
              })}
            </div>
          )
        })
        .flat(1)}
      <RawMaterialPopup />
    </div>
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
    addMachine: () => dispatch(addMachine({ y: 1, x: 1 }, STARTER_MACHINE)),
    rotate: () => dispatch(rotateMachine({ y: 1, x: 1 })),
    tick: () => dispatch(tick())
  }
}

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
)
export default connector(Factory)
