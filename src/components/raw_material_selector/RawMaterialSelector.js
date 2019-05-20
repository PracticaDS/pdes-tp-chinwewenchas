import React from 'react'
import { PropTypes } from 'prop-types'
import './RawMaterialSelector.css'
import { RawMaterial } from '../raw_material/RawMaterial'
import { connect } from 'react-redux'
import { rawMaterialSelected } from './actions'

export const RawMaterialSelector = ({
  starterPosition,
  rawMaterialSelected
}) => {
  return (
    <div className="raw-material-selector">
      <RawMaterial
        className="raw-material-selector-item"
        color="yellow"
        name="Oro"
        onClick={() => rawMaterialSelected(starterPosition, 'gold')}
      />
      <RawMaterial
        className="raw-material-selector-item"
        color="orange"
        name="Cobre"
        onClick={() => rawMaterialSelected(starterPosition, 'cobber')}
      />
      <RawMaterial
        className="raw-material-selector-item"
        color="silver"
        name="Aluminio"
        onClick={() => rawMaterialSelected(starterPosition, 'silver')}
      />
      <RawMaterial
        className="raw-material-selector-item"
        color="black"
        name="Carbon"
        onClick={() => rawMaterialSelected(starterPosition, 'carbon')}
      />
      <RawMaterial
        className="raw-material-selector-item"
        color="darkgrey"
        name="Hierro"
        onClick={() => rawMaterialSelected(starterPosition, 'iron')}
      />
    </div>
  )
}

RawMaterialSelector.propTypes = {
  starterPosition: PropTypes.object,
  rawMaterialSelected: PropTypes.func
}

const mapStateToProps = state => {
  return {
    starterPosition: state.rawMaterialSelector.selected
  }
}

const mapDispatchToProps = dispatch => {
  return {
    rawMaterialSelected: (position, material) =>
      dispatch(rawMaterialSelected(position, material))
  }
}

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default connector(RawMaterialSelector)
