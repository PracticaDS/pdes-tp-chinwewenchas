import { Cell } from '../cell/Cell'
import React, { Fragment } from 'react'
import { MachineCreator } from '../machines/machineCreator/MachineCreator'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { tick } from './actions'
import './Factory.css'
import RawMaterialPopup from '../raw_material_popup/RawMaterialPopup'

export const Factory = ({ factory, tick }) => {
  tick()
  const { rows, columns, totalSells, actionSelected, ...board } = factory
  return (
    <Fragment>
      <div className="factory">
        <table>
          <tbody>
            {Object.keys(board)
              .map(row => {
                return (
                  <tr key={row}>
                    {Object.keys(board[row]).map(col => {
                      return (
                        <td key={col}>
                          <Cell className="factory_item">
                            <MachineCreator machine={board[row][col]} />
                          </Cell>
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
  tick: PropTypes.func
}

const mapStateToProps = state => {
  return {
    factory: state.factory
  }
}

const mapDispatchToProps = dispatch => {
  return {
    tick: () => dispatch(tick())
  }
}

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
)
export default connector(Factory)
