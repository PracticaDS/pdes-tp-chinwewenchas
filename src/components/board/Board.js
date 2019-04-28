import React from 'react'
import { Square } from '../square/Square'
import './Board.css'
import { PropTypes } from 'prop-types'

export class Board extends React.Component {
  calculateStyle () {
    return {
      gridTemplateColumns: `repeat(${this.props.columns}, fit-content(120px))`
    }
  }

  render () {
    const squares = []
    var index = 0
    for (var i = 0; i < this.props.rows; i++) {
      for (var z = 0; z < this.props.columns; z++) {
        squares.push(<Square id={index} key={index} />)
        index++
      }
    }
    return (
      <div style={this.calculateStyle()} className="board">
        {squares}
      </div>
    )
  }
}

Board.propTypes = {
  rows: PropTypes.number,
  columns: PropTypes.number
}

Board.defaultProps = {
  rows: 16,
  columns: 16
}
