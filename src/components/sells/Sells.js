import './Sells.css'
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'

export const Sells = ({ totalSells }) => {
  return (
    <div className="incomes-container">
      Ganancias <span className="incomes">${totalSells}</span>
    </div>
  )
}

Sells.propTypes = {
  totalSells: PropTypes.number
}

const mapStateToProps = state => {
  return {
    totalSells: state.factory.totalSells
  }
}

export default connect(
  mapStateToProps,
  undefined
)(Sells)
