import React, { Fragment } from 'react'
import Sells from '../sells/Sells'
import { ToolBox } from '../toolbox/ToolBox'
import Factory from '../factory/Factory'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { NONE_USER } from '../sign_in/reducer'
import SignIn from '../sign_in/SignIn'

const SelectAppView = ({ user }) => {
  if (user !== NONE_USER) {
    return (
      <Fragment>
        <Sells />
        <ToolBox />
        <Factory />
      </Fragment>
    )
  } else {
    return <SignIn />
  }
}

SelectAppView.propTypes = {
  user: PropTypes.string
}

const mapStateToProps = state => {
  return {
    user: state.signIn.user
  }
}

const connector = connect(
  mapStateToProps,
  undefined
)

export default connector(SelectAppView)
