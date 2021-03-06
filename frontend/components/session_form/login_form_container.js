import {connect} from 'react-redux';
import {login, clearErrors} from '../../actions/session_actions';
import SessionForm from './session_form';
import {Link} from 'react-router-dom';
import React from 'react';

const mapStateToProps = (state,ownProps) => {
  return({
    errors: state.errors.session,
    formType: "LOGIN",
    navLink: <Link to='/signup'>New User? Sign Up</Link>,
    welcomeMsg: "Login to feedme"
  })
}

const mapDispatchToProps = (dispatch) => {
  return({
    processForm: (user) => dispatch(login(user)),
    login: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);