import React from 'react'
import './ToolBox.css'
import { Seller } from '../machines/seller/Seller'
import { Furnace } from '../machines/furnace/Furnace'
import { Crafter } from '../machines/crafter/Crafter'
import { Transporter } from '../machines/transporter/Transporter'
import { Remove } from '../actions/remove/Remove'
import { Move } from '../actions/move/Move'
import { Rotate } from '../actions/rotate/Rotate'
import { Starter } from '../machines/starter/Starter'
import { Cell } from '../cell/Cell'
import { south } from '../machines/direction'
import {
  FURNACE_MACHINE,
  NONE_MACHINE,
  SELLER_MACHINE,
  STARTER_MACHINE,
  TRANSPORTER_MACHINE,
  CRAFTER_MACHINE
} from '../machines/machines'
import AddMachine from '../add_machine/AddMachine'

export const ToolBox = () => {
  return (
    <div className="toolbox-container">
      <div className="title">Máquinas</div>
      <div className="toolbox-board">
        <div className="row">
          <AddMachine machineType={STARTER_MACHINE}>
            <Cell>
              <Starter direction={south()} onClick={() => {}} />
            </Cell>
          </AddMachine>
          <AddMachine machineType={SELLER_MACHINE}>
            <Cell>
              <Seller direction={south()} />
            </Cell>
          </AddMachine>
        </div>

        <div className="row">
          <AddMachine machineType={FURNACE_MACHINE}>
            <Cell>
              <Furnace direction={south()} />
            </Cell>
          </AddMachine>
          <AddMachine machineType={CRAFTER_MACHINE}>
            <Cell>
              <Crafter direction={south()} />
            </Cell>
          </AddMachine>
        </div>
        <div className="row">
          <AddMachine machineType={TRANSPORTER_MACHINE}>
            <Cell>
              <Transporter direction={south()} />
            </Cell>
          </AddMachine>
          <AddMachine machineType={NONE_MACHINE}>
            <Cell />
          </AddMachine>
        </div>
      </div>

      <div className="title">Edición</div>
      <div className="toolbox-board">
        <div className="row">
          <Cell>
            <Remove id={1} key={1} />
          </Cell>
          <Cell>
            <Move id={2} key={2} />
          </Cell>
        </div>
        <div className="row">
          <Cell>
            <Rotate id={3} key={3} />
          </Cell>
          <Cell />
        </div>
      </div>
    </div>
  )
}
