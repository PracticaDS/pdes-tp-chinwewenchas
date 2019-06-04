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
  CRAFTER_MACHINE,
  FURNACE_MACHINE,
  SELLER_MACHINE,
  STARTER_MACHINE,
  TRANSPORTER_MACHINE
} from '../machines/machines'
import AddMachine from '../add_machine/AddMachine'
import ActionForMachine from '../action_machine/ActionForMachine'
import {
  MOVE_MACHINE_ACTION,
  REMOVE_MACHINE_ACTION,
  ROTATE_MACHINE_ACTION
} from '../factory/factoryLib'

export const ToolBox = () => {
  return (
    <div className="toolbox-container">
      <div className="title">Máquinas</div>
      <div className="toolbox-board">
        <div className="row">
          <Cell>
            <AddMachine machineType={STARTER_MACHINE}>
              <Starter direction={south()} selectRawMaterial={() => {}} />
            </AddMachine>
          </Cell>
          <Cell>
            <AddMachine machineType={SELLER_MACHINE}>
              <Seller direction={south()} onClick={() => {}} />
            </AddMachine>
          </Cell>
        </div>

        <div className="row">
          <Cell>
            <AddMachine machineType={FURNACE_MACHINE}>
              <Furnace direction={south()} onClick={() => {}} />
            </AddMachine>
          </Cell>
          <Cell>
            <AddMachine machineType={CRAFTER_MACHINE}>
              <Crafter direction={south()} onClick={() => {}} />
            </AddMachine>
          </Cell>
        </div>
        <div className="row">
          <Cell>
            <AddMachine machineType={TRANSPORTER_MACHINE}>
              <Transporter direction={south()} onClick={() => {}} />
            </AddMachine>
          </Cell>
          <Cell />
        </div>
      </div>

      <div className="title">Edición</div>
      <div className="toolbox-board">
        <div className="row">
          <Cell>
            <ActionForMachine actionType={REMOVE_MACHINE_ACTION}>
              <Remove direction={south()} />
            </ActionForMachine>
          </Cell>
          <Cell>
            <ActionForMachine actionType={MOVE_MACHINE_ACTION}>
              <Move direction={south()} />
            </ActionForMachine>
          </Cell>
        </div>
        <div className="row">
          <Cell>
            <ActionForMachine actionType={ROTATE_MACHINE_ACTION}>
              <Rotate direction={south()} />
            </ActionForMachine>
          </Cell>
          <Cell />
        </div>
      </div>
    </div>
  )
}
