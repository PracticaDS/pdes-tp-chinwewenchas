import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { enteredUserChange, signIn } from './actions'
import './SignIn.css'
const SignIn = ({ userChange, signIn, user }) => {
  return (
    <div className="sign_in_container">
      <div className="sign_in_form">
        <h1>Sign In! </h1>
        <input
          className="sign_in_form_input"
          type="text"
          value={user}
          onChange={e => userChange(e)}
        />
        <button className="sign_in_form_button" onClick={() => signIn()}>
          Sign In
        </button>
      </div>
    </div>
  )
}

SignIn.propTypes = {
  userChange: PropTypes.func,
  signIn: PropTypes.func,
  user: PropTypes.string
}

const mapStateToProps = state => {
  return {
    user: state.signIn.enteredUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    userChange: event => dispatch(enteredUserChange(event.target.value)),
    signIn: () => dispatch(signIn())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn)
