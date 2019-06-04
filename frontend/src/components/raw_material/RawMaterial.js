import React from 'react'
import { PropTypes } from 'prop-types'
import './RawMaterial.css'

export const RawMaterial = ({ color, name, className, onClick }) => {
  return (
    <div className={`raw-material ${className || ''}`} onClick={onClick}>
      <div
        style={{ backgroundColor: color }}
        className="raw-material-item raw-material-color"
      />
      <span className="raw-material-item raw_material-name">{name}</span>
    </div>
  )
}

RawMaterial.propTypes = {
  color: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func
}
