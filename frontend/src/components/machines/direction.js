export const NORTH = 'NORTH'
export const EAST = 'EAST'
export const WEST = 'WEST'
export const SOUTH = 'SOUTH'

export const position = (row, cell) => {
  return { y: row, x: cell }
}

export const row = ({ y }) => {
  return y
}

export const column = ({ x }) => {
  return x
}

export const north = () => {
  return {
    direction: NORTH,
    rotation: 0.5
  }
}

export const east = () => {
  return {
    direction: EAST,
    rotation: 0.75
  }
}

export const west = () => {
  return {
    direction: WEST,
    rotation: 0.25
  }
}

export const south = () => {
  return {
    direction: SOUTH,
    rotation: 0.0
  }
}

export const turnClockwise = ({ direction }) => {
  switch (direction) {
    case NORTH:
      return east()
    case EAST:
      return south()
    case WEST:
      return north()
    case SOUTH:
      return west()
    default:
      return south()
  }
}

export const positionAt = (position, direction) => {
  switch (direction.direction) {
    case NORTH:
      return { ...position, y: position.y - 1 }
    case EAST:
      return { ...position, x: position.x + 1 }
    case WEST:
      return { ...position, x: position.x - 1 }
    case SOUTH:
      return { ...position, y: position.y + 1 }
    default:
      return { y: -1, x: -1 }
  }
}

export const isPositionAtDirection = (position, direction, toPosition) => {
  return equals(positionAt(position, direction), toPosition)
}

export const equals = (left, right) => {
  return left.x === right.x && left.y === right.y
}

export const opositeDirection = direction => {
  switch (direction.direction) {
    case NORTH:
      return south()
    case EAST:
      return west()
    case WEST:
      return east()
    case SOUTH:
      return north()
    default:
      return undefined
  }
}

export const isPositionNeighbour = (position, toPosition) => {
  return (
    isPositionAtDirection(position, north(), toPosition) ||
    isPositionAtDirection(position, south(), toPosition) ||
    isPositionAtDirection(position, west(), toPosition) ||
    isPositionAtDirection(position, east(), toPosition)
  )
}
