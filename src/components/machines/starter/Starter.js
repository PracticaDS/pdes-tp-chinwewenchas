import React from 'react'
import PropTypes from 'prop-types'
import './Starter.css'
import { connect } from 'react-redux'
import { positionSelected } from '../../factory/actions'
import { Machine } from '../machine/Machine'
import { openRawMaterialSelector } from '../../raw_material_selector/actions'

const onClick = (
  position,
  selectRawMaterial,
  selectPosition,
  actionSelected
) => {
  if (actionSelected) {
    selectPosition(position)
  } else {
    selectRawMaterial(position)
  }
}

export const Starter = ({
  position,
  active,
  selectRawMaterial,
  selectPosition,
  actionSelected,
  direction
}) => {
  return (
    <div
      className="starter"
      onClick={() =>
        onClick(position, selectRawMaterial, selectPosition, actionSelected)
      }
    >
      <Machine
        direction={direction}
        activeImg="icons/starter_active.svg"
        inactiveImg="icons/starter.svg"
        active={active}
      />
    </div>
  )
}

Starter.propTypes = {
  active: PropTypes.bool,
  selectRawMaterial: PropTypes.func,
  selectPosition: PropTypes.func,
  actionSelected: PropTypes.string,
  position: PropTypes.object,
  direction: PropTypes.object
}

const mapStateToProps = state => {
  return {
    actionSelected: state.factory.actionSelected.actionType
  }
}

const mapDispatchToProps = dispatch => ({
  selectRawMaterial: position => dispatch(openRawMaterialSelector(position)),
  selectPosition: position => dispatch(positionSelected(position))
})

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
)
export default connector(Starter)
