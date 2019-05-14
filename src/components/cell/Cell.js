import React from 'react'
import PropTypes from 'prop-types'
import './Cell.css'

export const Cell = ({ className, children }) => {
  return <div className={`cell ${className}`}>{children}</div>
}

Cell.propTypes = {
  className: PropTypes.string,
  children: PropTypes.object
}
