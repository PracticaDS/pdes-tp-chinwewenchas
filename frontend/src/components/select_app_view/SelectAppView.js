import React, { Fragment } from 'react'
import Sells from '../sells/Sells'
import { ToolBox } from '../toolbox/ToolBox'
import Factory from '../factory/Factory'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { NONE_USER } from '../sign_in/reducer'
import SignIn from '../sign_in/SignIn'
import FactorySelector from '../factory_selector/FactorySelector'

const SelectAppView = ({ user, factoryName }) => {
  if (user === NONE_USER) {
    return <SignIn />
  } else if (factoryName === undefined) {
    return <FactorySelector />
  } else {
    return (
      <Fragment>
        <Sells />
        <ToolBox />
        <Factory />
      </Fragment>
    )
  }
}

SelectAppView.propTypes = {
  user: PropTypes.string,
  factoryName: PropTypes.string
}

const mapStateToProps = state => {
  return {
    user: state.signIn.user,
    factoryName: state.factory.name
  }
}

const connector = connect(
  mapStateToProps,
  undefined
)

export default connector(SelectAppView)
