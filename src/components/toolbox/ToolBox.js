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
import ActionForMachine from '../action_machine/ActionForMachine'
import {
  ROTATE_MACHINE_ACTION,
  MOVE_MACHINE_ACTION,
  REMOVE_MACHINE_ACTION
} from '../factory/factoryLib'

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
              <Seller direction={south()} onClick={() => {}} />
            </Cell>
          </AddMachine>
        </div>

        <div className="row">
          <AddMachine machineType={FURNACE_MACHINE}>
            <Cell>
              <Furnace direction={south()} onClick={() => {}} />
            </Cell>
          </AddMachine>
          <AddMachine machineType={CRAFTER_MACHINE}>
            <Cell>
              <Crafter direction={south()} onClick={() => {}} />
            </Cell>
          </AddMachine>
        </div>
        <div className="row">
          <AddMachine machineType={TRANSPORTER_MACHINE}>
            <Cell>
              <Transporter direction={south()} onClick={() => {}} />
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
          <ActionForMachine actionType={REMOVE_MACHINE_ACTION}>
            <Cell>
              <Remove direction={south()} />
            </Cell>
          </ActionForMachine>
          <ActionForMachine actionType={MOVE_MACHINE_ACTION}>
            <Cell>
              <Move direction={south()} />
            </Cell>
          </ActionForMachine>
        </div>
        <div className="row">
          <ActionForMachine actionType={ROTATE_MACHINE_ACTION}>
            <Cell>
              <Rotate direction={south()} />
            </Cell>
          </ActionForMachine>
          <Cell />
        </div>
      </div>
    </div>
  )
}
