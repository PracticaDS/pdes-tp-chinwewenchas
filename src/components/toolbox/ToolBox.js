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

export class ToolBox extends React.Component {
  constructor (props) {
    super(props)
    this.basePath = '../../assets/'
    this.machinesPaths = [
      'crafter.svg',
      'furnace.svg',
      'seller.svg',
      'starter.svg',
      'transporter.svg'
    ]
    this.actionsPaths = ['eliminar.svg', 'mover.svg', 'rotar.svg']
  }

  calculateStyle () {
    return {
      gridTemplateColumns: `repeat(${2}, fit-content(120px))`
    }
  }

  cell (component) {
    return <Cell>{component}</Cell>
  }
  render () {
    const machineSquares = []
    machineSquares.push(this.cell(<Starter />))
    machineSquares.push(this.cell(<Seller id={2} key={2} />))
    machineSquares.push(this.cell(<Furnace id={3} key={3} />))
    machineSquares.push(this.cell(<Crafter id={4} key={4} />))
    machineSquares.push(this.cell(<Transporter id={5} key={5} />))
    machineSquares.push(this.cell(<Cell />))

    const actionSquares = []
    actionSquares.push(<Remove id={1} key={1} />)
    actionSquares.push(<Move id={2} key={2} />)
    actionSquares.push(<Rotate id={3} key={3} />)
    actionSquares.push(<Cell />)

    return (
      <div className="toolbox-container">
        <div className="title">Máquinas</div>
        <div className="toolbox-board">
          <div className="row">{machineSquares.slice(0, 2)}</div>

          <div className="row">{machineSquares.slice(2, 4)}</div>
          <div className="row">{machineSquares.slice(4, 6)}</div>
          <div className="row">{machineSquares.slice(6, 8)}</div>
        </div>

        <div className="title">Edición</div>
        <div className="toolbox-board">
          <div className="row">{actionSquares.slice(0, 2)}</div>

          <div className="row">{actionSquares.slice(2, 4)}</div>
        </div>
      </div>
    )
  }
}
