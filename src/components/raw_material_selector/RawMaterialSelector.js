import React from 'react'
import { PropTypes } from 'prop-types'
import './RawMaterialSelector.css'
import { RawMaterial } from '../raw_material/RawMaterial'
import { connect } from 'react-redux'
import { rawMaterialSelected } from './actions'

export const RawMaterialSelector = ({ starterId, rawMaterialSelected }) => {
  return (
    <div className="raw-material-selector">
      <RawMaterial
        className="raw-material-selector-item"
        color="yellow"
        name="Oro"
        onClick={() => rawMaterialSelected(starterId, 'gold')}
      />
      <RawMaterial
        className="raw-material-selector-item"
        color="orange"
        name="Cobre"
        onClick={() => rawMaterialSelected(starterId, 'cobber')}
      />
      <RawMaterial
        className="raw-material-selector-item"
        color="silver"
        name="Aluminio"
        onClick={() => rawMaterialSelected(starterId, 'silver')}
      />
      <RawMaterial
        className="raw-material-selector-item"
        color="black"
        name="Carbon"
        onClick={() => rawMaterialSelected(starterId, 'carbon')}
      />
      <RawMaterial
        className="raw-material-selector-item"
        color="darkgrey"
        name="Hierro"
        onClick={() => rawMaterialSelected(starterId, 'iron')}
      />
    </div>
  )
}

RawMaterialSelector.propTypes = {
  starterId: PropTypes.object,
  rawMaterialSelected: PropTypes.func
}

const mapStateToProps = state => {
  return {
    starterId: state.rawMaterialSelector.selected
  }
}

const mapDispatchToProps = dispatch => {
  return {
    rawMaterialSelected: (id, material) =>
      dispatch(rawMaterialSelected(id, material))
  }
}

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default connector(RawMaterialSelector)
