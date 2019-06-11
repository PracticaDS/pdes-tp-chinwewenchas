import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  newFactoryChangeName,
  newFactorySizeChange,
  createFactory
} from './actions'
import './FactorySelector.css'

const FactorySelector = ({
  userName,
  newFactoryName,
  newFactorySize,
  newFactoryChangeName,
  newFactorySizeChange,
  createFactory
}) => {
  return (
    <div className="factory_selector_container">
      <div className="factory_selector_form">
        <h1>Whale cum {userName}! </h1>
        <br />
        <input
          className="factory_selector_form_input"
          placeholder="Factory Name"
          type="text"
          value={newFactoryName}
          onChange={e => newFactoryChangeName(e)}
        />
        <input
          className="factory_selector_form_input"
          placeholder="Factory Size"
          type="number"
          value={newFactorySize}
          onChange={e => newFactorySizeChange(e)}
        />
        <button
          className="factory_selector_form_button"
          onClick={() => createFactory()}
        >
          Create Factory
        </button>
      </div>
    </div>
  )
}

FactorySelector.propTypes = {
  userName: PropTypes.string,
  newFactoryName: PropTypes.string,
  newFactorySize: PropTypes.number,
  newFactoryChangeName: PropTypes.func,
  newFactorySizeChange: PropTypes.func,
  createFactory: PropTypes.func
}

const mapStateToProps = state => {
  return {
    userName: state.signIn.user,
    newFactoryName: state.factorySelector.newFactoryName,
    newFactorySize: state.factorySelector.newFactorySize
  }
}

const mapDispatchToProps = dispatch => {
  return {
    newFactoryChangeName: e => dispatch(newFactoryChangeName(e.target.value)),
    newFactorySizeChange: e => dispatch(newFactorySizeChange(e.target.value)),
    createFactory: () => dispatch(createFactory())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FactorySelector)
