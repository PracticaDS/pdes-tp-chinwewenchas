import {
  newMachine,
  NONE_MACHINE,
  rotateMachine,
  tickMachine,
  withMaterial
} from '../machines/machines'
import { column, position, row } from '../machines/direction'

export function emptyFactory () {
  return { rows: 0, columns: 0, totalSells: 0 }
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

  return {
    ...board,
    rows: size,
    columns: size,
    totalSells: 0,
    actionSelected: {}
  }
}

export const addToSells = (sells, factory) => {
  return {
    ...factory,
    totalSells: factory.totalSells + sells
  }
}

export const tick = (machinesPositions, state) => {
  return machinesPositions.reduce(
    (newState, position) => tickMachine(newState, position),
    state
  )
}

export const addMachine = (position, machineType, factory) => {
  return updatePositionWith(
    factory.actualPosition ? factory.actualPosition : position,
    _ =>
      newMachine(
        factory.actualPosition ? factory.actualPosition : position,
        machineType
      ),
    factory
  )
}

export const removeMachine = (position, factory) => {
  return updatePositionWith(
    factory.actualPosition ? factory.actualPosition : position,
    _ => NONE_MACHINE,
    factory
  )
}

export const moveMachine = (position, factory) => {
  return updatePositionWith(factory.actualPosition, _ => NONE_MACHINE, {
    ...factory,
    actualMovingMachine: machineAt(factory.actualPosition, factory)
  })
}

export const actualPosition = (position, factory) => {
  let newState = {
    ...factory,
    actualPosition: position
  }
  if (factory.actualMovingMachine) {
    return updatePositionWith(
      newState.actualPosition,
      machine => newState.actualMovingMachine,
      newState
    )
  } else {
    return newState
  }
}

export const findAndRotateMachine = (position, factory) => {
  return updatePositionWith(
    factory.actualPosition ? factory.actualPosition : position,
    machine => rotateMachine(machine),
    factory
  )
}

export const materialTo = (
  position,
  materials,
  factory,
  fromPosition = undefined
) => {
  return updatePositionWith(
    position,
    machine => withMaterial(machine, materials, fromPosition),
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
  delete factory.actualMovingMachine
  return {
    ...factory,
    [row(position)]: {
      ...factory[row(position)],
      [column(position)]: callback(machine)
    }
  }
}

export const ADD_MACHINE_ACTION = 'ADD_MACHINE_ACTION'
