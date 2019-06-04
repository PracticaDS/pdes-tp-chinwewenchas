import {
  column,
  east,
  EAST,
  north,
  NORTH,
  position,
  positionAt,
  row,
  SOUTH,
  south,
  turnClockwise,
  WEST,
  west
} from './direction'

describe('directions', function () {
  describe('position', () => {
    it('creates a position', function () {
      expect(position(1, 2)).toEqual({ y: 1, x: 2 })
    })
    it('returns the row', () => {
      expect(row(position(1, 2))).toBe(1)
    })
    it('returns the column', () => {
      expect(column(position(1, 2))).toBe(2)
    })
  })

  const itReturnsTheDirectionAndTheRotation = (
    direction,
    expectedDirection,
    expectedRotation
  ) => {
    it('returns the direction and the rotation', function () {
      expect(direction.direction).toBe(expectedDirection)
      expect(direction.rotation).toBe(expectedRotation)
    })
  }

  describe('south', function () {
    itReturnsTheDirectionAndTheRotation(south(), SOUTH, 0)
  })

  describe('noth', function () {
    itReturnsTheDirectionAndTheRotation(north(), NORTH, 0.5)
  })

  describe('east', function () {
    itReturnsTheDirectionAndTheRotation(east(), EAST, 0.75)
  })

  describe('west', function () {
    itReturnsTheDirectionAndTheRotation(west(), WEST, 0.25)
  })

  describe('turn clockwise', () => {
    const itReturns = (direction, directionExpected) => {
      expect(turnClockwise(direction)).toEqual(directionExpected)
    }

    describe('when is north', function () {
      itReturns(north(), east())
    })
    describe('when is south', function () {
      itReturns(south(), west())
    })
    describe('when is east', function () {
      itReturns(east(), south())
    })
    describe('when is west', function () {
      itReturns(west(), north())
    })
  })

  describe('position at direction', function () {
    let position = { y: 2, x: 2 }

    function itMovesToDirection (direction, expectedPosition) {
      expect(positionAt(position, direction)).toEqual(expectedPosition)
    }

    describe('when direction is north', function () {
      itMovesToDirection(north(), { y: 1, x: 2 })
    })
    describe('when direction is south', function () {
      itMovesToDirection(south(), { y: 3, x: 2 })
    })
    describe('when direction is east', function () {
      itMovesToDirection(east(), { y: 2, x: 3 })
    })
    describe('when direction is west', function () {
      itMovesToDirection(west(), { y: 2, x: 1 })
    })
  })
})
