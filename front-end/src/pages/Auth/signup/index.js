import React, { Component, PropTypes } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import '../../../main.css';
import Messages from '../notifications/Messages'
import Errors from '../notifications/Errors'

import Appfirst from '../../../AppFirst';
import signupRequest from './actions'

class Signup extends Component {

  // Redux Form will call this function with the values of our
  // Form fields `email` and `password` when the form is submitted
  // this will in turn call the action
  submit = (values) => {
    // we could just do signupRequest here with the static proptypes
    // but ESLint doesn't like that very much...
    this.props.signupRequest(values)
  }

  render () {
    // grab what we need from props.  The handleSubmit from ReduxForm
    // and the pieces of state from the global state.
    const {
      handleSubmit,
      signup: {
        requesting,
        successful,
        messages,
        errors,
      },
    } = this.props

    return (
      <div className="App">
        <div className="App-header">
          {/* <div className="login-header">
            <Link to="/login">Login</Link>
          </div>
          <div className="signup-header">
            <Link to="/signup">Signup</Link>
          </div> */}
        </div>
        <section className="App-body">
          <div className="signup">
            <div className="form-header">
              <div className="login-header">
                <Link to="/login">Login</Link>
              </div>
              <div className="signup-header">
                <Link to="/signup">Signup</Link>
              </div>
            </div>
            {/* Use the Submit handler with our own submit handler*/}
            <form className="widget-form" onSubmit={handleSubmit(this.submit)}>
              <h1>User Signup</h1>
              <label htmlFor="email">Email</label>
              <Field
                name="email"
                type="text"
                id="email"
                className="email"
                label="Email"
                component="input"
              />
              <label htmlFor="password">Password</label>
              <Field
                name="password"
                type="password"
                id="password"
                className="password"
                label="Password"
                component="input"
              />
              <button action="submit">Signup</button>
            </form>
            <div className="auth-messages">
              {
                /*
                These are all nothing more than helpers that will show up
                based on the UI states, not worth covering in depth.  Simply put
                if there are messages or errors, we show them
                */
              }
              {!requesting && !!errors.length && (
                <Errors message="Failure to signup due to:" errors={errors} />
              )}
              {!requesting && !!messages.length && (
                <Messages messages={messages} />
              )}
              {/* {!requesting && successful && (
                // <div>
                //   Signup Successful! <Link to="/login">Click here to Login »</Link>
                // </div>
              )} */}
              {/* Redux Router's <Link> component for quick navigation of routes */}
              {/* {!requesting && !successful && (
                <Link to="/login">Already have account? Login Here »</Link>
              )} */}
            </div>
          </div>
        </section>
      </div>
    )
  }
}

// Grab only the piece of state we need
const mapStateToProps = state => ({
  signup: state.signup,
})

// Connect our component to redux and attach the `signup` piece
// of state to our `props` in the component.  Also attach the
// `signupRequest` action to our `props` as well.
const connected = connect(mapStateToProps, { signupRequest })(Signup)

// Connect our connected component to Redux Form.  It will namespace
// the form we use in this component as `signup`.
const formed = reduxForm({
  form: 'signup',
})(connected)

// Export our well formed component!
export default formed
