import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  newFactoryChangeName,
  newFactorySizeChange,
  createFactory,
  selectFactory
} from './actions'
import './FactorySelector.css'
import { FactoryItem } from './FactoryItem'

const FactorySelector = ({
  userName,
  newFactoryName,
  newFactorySize,
  newFactoryChangeName,
  newFactorySizeChange,
  createFactory,
  factories,
  selectFactory
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
        {factories.map((f, i) => {
          return (
            <FactoryItem
              key={i}
              name={f.name}
              onClick={() => selectFactory(f._id)}
            />
          )
        })}
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
  createFactory: PropTypes.func,
  factories: PropTypes.array,
  selectFactory: PropTypes.func
}

const mapStateToProps = state => {
  return {
    userName: state.signIn.user,
    newFactoryName: state.factorySelector.newFactoryName,
    newFactorySize: state.factorySelector.newFactorySize,
    factories: state.factorySelector.factories
  }
}

const mapDispatchToProps = dispatch => {
  return {
    newFactoryChangeName: e => dispatch(newFactoryChangeName(e.target.value)),
    newFactorySizeChange: e => dispatch(newFactorySizeChange(e.target.value)),
    createFactory: () => dispatch(createFactory()),
    selectFactory: id => dispatch(selectFactory(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FactorySelector)
