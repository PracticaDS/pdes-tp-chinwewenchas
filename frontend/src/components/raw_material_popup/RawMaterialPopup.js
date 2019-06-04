import RawMaterialSelector from '../raw_material_selector/RawMaterialSelector'
import React from 'react'
import { Occultable } from '../occultable/Occultable'
import { PropTypes } from 'prop-types'
import './RawMaterialPopup.css'
import { connect } from 'react-redux'

export const RawMaterialPopup = ({ visible }) => {
  return (
    <Occultable visible={visible}>
      <div className="raw-material-popup">
        <div className="raw-material-popup-container">
          <RawMaterialSelector />
        </div>
      </div>
    </Occultable>
  )
}

RawMaterialPopup.propTypes = {
  visible: PropTypes.bool
}

const mapStateToProps = state => state.rawMaterialPopUp

const connector = connect(
  mapStateToProps,
  undefined
)
export default connector(RawMaterialPopup)
