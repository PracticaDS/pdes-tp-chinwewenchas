import React from 'react'
import PropTypes from 'prop-types'
import './FactoryItem.css'

export const FactoryItem = ({ name, onClick }) => {
  return (
    <div className="factory_selector_item">
      <span className="factory_selector_item_name">{name}</span>
      <button className="factory_selector_item_button" onClick={onClick}>
        {'=>'}
      </button>
    </div>
  )
}

FactoryItem.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func
}
