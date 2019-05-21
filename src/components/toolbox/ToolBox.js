import React from 'react'
import { Seller } from '../machines/seller/Seller'
import { Furnace } from '../machines/furnace/Furnace'
import { Crafter } from '../machines/crafter/Crafter'
import { Transporter } from '../machines/transporter/Transporter'
import { Remove } from '../actions/remove/Remove'
import { Move } from '../actions/move/Move'
import { Rotate } from '../actions/rotate/Rotate'
import './ToolBox.css'
import { Starter } from '../machines/starter/StarterToolbox'
import { Cell } from '../cell/Cell'
import { south } from '../machines/direction'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addMachine, rotateMachine, tick } from '../factory/actions'
import {
  FURNACE_MACHINE,
  SELLER_MACHINE,
  STARTER_MACHINE,
  TRANSPORTER_MACHINE,
  CRAFTER_MACHINE
} from '../machines/machines'

export const ToolBox = ({
  factory,
  addStarter,
  addTransporter,
  addFurnace,
  addSeller,
  addCrafter,
  rotate,
  tick
}) => {
  return (
    <div className="toolbox-container">
      <div className="title">Máquinas</div>
      <div className="toolbox-board">
        <div className="row">
          <div onClick={addStarter}>
            <Cell>
              <Starter active={false} direction={south()} />
            </Cell>
          </div>
          <div onClick={addSeller}>
            <Cell>
              <Seller active={false} direction={south()} materials={[]} />
            </Cell>
          </div>
        </div>

        <div className="row">
          <div onClick={addFurnace}>
            <Cell>
              <Furnace active={false} direction={south()} materials={[]} />
            </Cell>
          </div>
          <div onClick={addCrafter}>
            <Cell>
              <Crafter active={false} direction={south()} materials={[]} />
            </Cell>
          </div>
        </div>

        <div className="row">
          <div onClick={addTransporter}>
            <Cell>
              <Transporter active={false} direction={south()} materials={[]} />
            </Cell>
          </div>
          <Cell />
        </div>
      </div>

      <div className="title">Edición</div>
      <div className="toolbox-board">
        <div className="row">
          <Cell>
            <Remove active={false} direction={south()} />
          </Cell>
          <Cell>
            <Move active={false} direction={south()} />
          </Cell>
        </div>

        <div className="row">
          <div onClick={rotate}>
            <Cell>
              <Rotate active={false} direction={south()} />
            </Cell>
          </div>
          <Cell />
        </div>
      </div>
    </div>
  )
}

ToolBox.propTypes = {
  factory: PropTypes.object,
  addStarter: PropTypes.func,
  addTransporter: PropTypes.func,
  addFurnace: PropTypes.func,
  addSeller: PropTypes.func,
  addCrafter: PropTypes.func,
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
    addStarter: () => {
      dispatch(addMachine({ y: 1, x: 1 }, STARTER_MACHINE))
    },
    addTransporter: () => {
      dispatch(addMachine({ y: 2, x: 1 }, TRANSPORTER_MACHINE))
    },
    addFurnace: () => {
      dispatch(addMachine({ y: 3, x: 1 }, FURNACE_MACHINE))
    },
    addSeller: () => {
      dispatch(addMachine({ y: 4, x: 1 }, SELLER_MACHINE))
    },
    addCrafter: () => {
      dispatch(addMachine({ y: 5, x: 1 }, CRAFTER_MACHINE))
    },
    rotate: () => dispatch(rotateMachine({ y: 1, x: 1 })),
    tick: () => dispatch(tick())
  }
}

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
)
export default connector(ToolBox)
