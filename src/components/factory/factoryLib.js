import {
  newMachine,
  NONE_MACHINE,
  rotateMachine,
  tickMachine,
  withMaterial
} from '../machines/machines'
import { column, position, row } from '../machines/direction'

export function emptyFactory () {
  return {}
}

export const createFactoryBoard = size => {
  let board = Array(size)
    .fill()
    .map((_, index) => {
      return {
        y: index,
        column: Array(size)
          .fill()
          .map((_, index) => {
            return { x: index }
          })
      }
    })
    .reduce((rows, row) => {
      rows[row.y] = row.column.reduce((cells, cell) => {
        cells[cell.x] = newMachine(position(row.y, cell.x), NONE_MACHINE)
        return cells
      }, {})
      return rows
    }, {})

  return { ...board, rows: size, columns: size }
}

export const tick = (machinesPositions, state) => {
  return machinesPositions.reduce(
    (newState, position) => tickMachine(newState, position),
    state
  )
}

export const addMachine = (position, machineType, factory) => {
  return updatePositionWith(
    position,
    _ => newMachine(position, machineType),
    factory
  )
}

export const findAndRotateMachine = (position, factory) => {
  return updatePositionWith(
    position,
    machine => rotateMachine(machine),
    factory
  )
}

export const materialTo = (position, material, factory) => {
  return updatePositionWith(
    position,
    machine => withMaterial(machine, material),
    factory
  )
}

export function machineAt (position, factory) {
  return factory[row(position)]
    ? factory[row(position)][column(position)]
    : undefined
}

export function updatePositionWith (position, callback, factory) {
  let machine = machineAt(position, factory)
  return {
    ...factory,
    [row(position)]: {
      ...factory[row(position)],
      [column(position)]: callback(machine)
    }
  }
}
