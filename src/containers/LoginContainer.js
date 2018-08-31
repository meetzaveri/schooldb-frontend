import React, {Component, Fragment} from 'react';
import Login from '../components/login/login'
import {login_request} from '../components/login/actions'
import {API} from '../api/api'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMsg: '',
      email: '',
      password: '',
      loginstatus: null
    }
  }

  onHandleInput = (event) => {
    console.log('event triggered', event,);
    const name = event.target.name;
    this.setState({[name]: event.target.value})
  }

  onSubmit = () => {
    console.log('this.state', this.state);
    const {email, password} = this.state;
    this
      .props
      .loginAction({email, password})
  }

  render() {
    const {onHandleInput, onSubmit} = this;
    const actions = {
      onHandleInput,
      onSubmit
    }
    return (
      <div>
        <Login state={this.state} actions={actions}/>
      </div>
    );
  }
}

LoginContainer.propTypes = {
  loginAction: PropTypes.func
}

const mapStateToProps = state => ({loginstatus: state.login});
const mapDispatchToProps = dispatch => {
  return {
    loginAction: (data) => dispatch(login_request({method: 'POST', url: API.login, data: data}))
  }
}

const LoginContainerConnector = connect(mapStateToProps, mapDispatchToProps)(LoginContainer)

export default LoginContainerConnector;