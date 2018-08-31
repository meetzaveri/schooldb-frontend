import React, {Component, Fragment} from 'react';
import Register from '../components/register/register';
import {API} from '../api/api'
import {connect} from 'react-redux';
import {register_request} from '../components/register/actions';
import PropTypes from 'prop-types';

class RegisterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMsg: '',
      name: '',
      roll: '',
      email: '',
      password: ''
    }
  }

  onHandleInputForRegistration = (event) => {
    const name = event.target.name;
    this.setState({[name]: event.target.value});
  }

  onSubmitRegistration = () => {
    console.log('Submit form', this.state);
    const {name, roll, email, password} = this.state;
    this
      .props
      .registerUser({name, roll, email, password})
  }

  render() {
    const {onHandleInputForRegistration, onSubmitRegistration} = this;
    const actions = {
      onHandleInputForRegistration,
      onSubmitRegistration
    }
    return (
      <div>
        <Register state={this.state} actions={actions}/>
      </div>
    );
  }
}
RegisterContainer.propTypes = {
  registerUser: PropTypes.func
}

const mapStateToProps = state => ({loginstatus: state.login});
const mapDispatchToProps = dispatch => {
  return {
    registerUser: (data) => dispatch(register_request({method: 'POST', url: API.register, data: data}))
  }
}

const RegisterContainerConnector = connect(mapStateToProps, mapDispatchToProps)(RegisterContainer)

export default RegisterContainerConnector;